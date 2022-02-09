import * as React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import VideoPlayer from 'components/video-player'
import 'swiper/css'

const Hero = () => {
  return (
    <section
      className="bg-white pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 xl:pt-36 xl:pb-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h2 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          Psych Mag
        </h2>
        <p className="mx-auto mt-8 max-w-6xl text-center md:text-xl lg:mt-10 lg:text-2xl lg:leading-normal xl:mt-12 xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
          Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
          nonsedit, utestiam, sus quia quis doluptio illatem et aut.
        </p>
        <div className="relative mt-8 md:mt-10 lg:mt-16 xl:mt-24">
          <div className="absolute bottom-0 z-10 pl-3 pb-3 md:pl-6 md:pb-6 lg:pl-8 lg:pb-8 xl:pl-12 xl:pb-12">
            <h3 className="font-headings text-5xl leading-none text-white md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[111px] ">
              vlog.
            </h3>
          </div>
          <VideoPlayer
            url="https://mytwynmediaservices-euno.akamaized.net/5eb305fa-6b14-4ebe-ad83-981f7a9c979e/5eb305fa-6b14-4ebe-ad83-981f7a9c.ism/manifest(format=m3u8-aapl).m3u8"
            controls={true}
            fullscreenControl={true}
            controlsClasses="bottom-3 right-3 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 xl:bottom-12 xl:right-12"
          />
        </div>
      </div>
      {/* <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          loop
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
        </Swiper>
      </div> */}
    </section>
  )
}

export default Hero
