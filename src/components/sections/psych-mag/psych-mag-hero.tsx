import * as React from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import {isEmpty} from 'lodash'

import {getYoutubeDetails} from 'utils/get-youtube-details'
import VideoPlayer from 'components/video-player'

const PsychMagHero: React.FC<any> = ({blok}) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const [youtubeDetails, setYoutubeDetails] = React.useState<any>([])
  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    getYoutubeDetails().then((data) => setYoutubeDetails(data))
  }, [])

  return (
    <section
      className="bg-white pt-20 pb-4 md:pt-28 md:pb-6 lg:pt-36 xl:pb-8"
      id="vlog"
    >
      <div className="container">
        <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
          <h1 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            {blok.title}
          </h1>
          <p className="mx-auto max-w-4xl text-center md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
            {blok.subtitle}
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
            controls={true}
            fullscreenControl={true}
            controlsClasses="bottom-3 right-3 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12"
          />
        </div>
        <div className="relative w-full px-8 md:px-14">
          <button
            className="youtube-swiper-button-prev swiper-button-prev pointer absolute left-0 top-7 z-10 h-0 w-0 border-solid md:top-14 xl:top-16 2xl:top-20"
            aria-label="previous video"
          />
          <button
            className="youtube-swiper-button-next swiper-button-next pointer absolute right-0 top-7 z-10 h-0 w-0 border-solid md:top-14 xl:top-16 2xl:top-20"
            aria-label="next video"
          />
          <div className="mt-4 min-h-[140px] w-full overflow-hidden md:mt-6 md:min-h-[214px] lg:min-h-[230px] xl:min-h-[236px] 2xl:mt-8 2xl:min-h-[288px]">
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
                  navigation={{
                    nextEl: '.youtube-swiper-button-next',
                    prevEl: '.youtube-swiper-button-prev',
                  }}
                  modules={[Navigation]}
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
                                    // priority
                                  />
                                </div>
                              </div>
                            </a>
                            <div className="mt-3 flex w-full flex-col items-center space-y-1 md:mt-2 lg:mt-3  2xl:mt-4 2xl:space-y-2">
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
      </div>
    </section>
  )
}

export default PsychMagHero
