import * as React from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {getYoutubeDetails} from 'utils/get-youtube-details'
import {isEmpty} from 'lodash'

import VideoPlayer from 'components/video-player'

const Hero: React.FC<any> = ({blok}) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const [youtubeDetails, setYoutubeDetails] = React.useState<any>([])
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    getYoutubeDetails().then((data) => setYoutubeDetails(data))
  }, [])

  console.log('youtubeDetails:', youtubeDetails)
  return (
    <section className="bg-white pt-20 pb-4 md:pt-24 md:pb-6 lg:pt-28 xl:pt-36 xl:pb-8">
      <div className="container">
        <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
          <h2 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            Psych Mag
          </h2>
          <p className="mx-auto max-w-4xl text-center md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut.
          </p>
        </div>
        <div className="relative mt-8 aspect-video md:mt-10 lg:mt-12 xl:mt-20">
          <div className="absolute bottom-0 z-10 pl-3 pb-3 md:pl-6 md:pb-6 lg:pl-8 lg:pb-8 xl:pl-12 xl:pb-12">
            <h3 className="font-headings text-5xl leading-none text-white md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[111px] ">
              vlog.
            </h3>
          </div>
          <VideoPlayer
            url={blok.main_frame_video_url}
            // url="https://mytwynmediaservices-euno.akamaized.net/5eb305fa-6b14-4ebe-ad83-981f7a9c979e/5eb305fa-6b14-4ebe-ad83-981f7a9c.ism/manifest(format=m3u8-aapl).m3u8"
            controls={true}
            fullscreenControl={true}
            controlsClasses="bottom-3 right-3 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12"
          />
        </div>
        <div className="mt-4 w-full overflow-hidden md:mt-6 2xl:mt-8">
          <div className="w-[150%] -translate-x-[16.66%] md:w-[133.33%] md:-translate-x-[12.5%]">
            {isMounted ? (
              <Swiper
                spaceBetween={16}
                slidesPerView={3}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 32,
                  },
                }}
                loop
              >
                {!isEmpty(youtubeDetails) &&
                  youtubeDetails.map((item: any, i: number) => {
                    return (
                      <SwiperSlide key={i}>
                        <div className="select-none">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="relative block aspect-video"
                          >
                            <div className="absolute inset-0 overflow-hidden">
                              <div className="relative h-full w-full duration-300 hover-hover:hover:scale-[1.15]">
                                <Image
                                  src={item.thumb}
                                  alt={item.title}
                                  layout="fill"
                                  objectFit="cover"
                                  priority
                                />
                              </div>
                            </div>
                          </a>
                          <div className="mt-3 flex w-full flex-col items-center space-y-1 md:mt-2 lg:mt-3 2xl:mt-4 2xl:space-y-2">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noreferrer"
                              className="relative block text-center font-headings text-xs text-pink line-clamp-1 lg:text-base xl:text-lg 2xl:text-xl"
                            >
                              {item.title}
                            </a>
                            <div className="flex flex-nowrap items-center text-xs lg:text-sm xl:text-base 2xl:text-lg">
                              {item.date}
                              <div className="mx-1 md:mx-2">|</div>
                              {item.duration}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// const fakeYoutubeVideosArr = [
//   {
//     id: 'mRHG2lWvF4A',
//     title: 'THE MOST CROWDED PIPELINE EVER! (ITS GETTING WORSE)',
//     date: 'Jan 24, 2022',
//     duration: '16:51',
//   },
//   {
//     id: 'I6U6DmLJLB8',
//     title: 'MY WORST WIPE OUT AT PIPELINE!!! (LUCKY TO BE ALIVE)',
//     date: 'Jan 17, 2022',
//     duration: '16:43',
//   },
//   {
//     id: '23-5OsFdO9s',
//     title: 'GIRLS ATTEMPT DANGEROUS SLIP ‘N‘ SLIDE',
//     date: 'Dec 13, 2021',
//     duration: '12:57',
//   },
//   {
//     id: 'Uid6k5wPY68',
//     title: "JAMIE O'BRIEN PIPELINE HOUSE TOUR",
//     date: 'Apr 5, 2021',
//     duration: '24:18',
//   },
//   {
//     id: '7rXyTRsqSbA',
//     title: 'THIS IS PARADISE (HAWAII)',
//     date: 'May 25, 2020',
//     duration: '19:10',
//   },
// ]
