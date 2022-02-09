import * as React from 'react'
import type {NextPage} from 'next'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import PageLayout from 'components/layouts/page-layout'

const SurfMag: NextPage = () => {
  return (
    <PageLayout>
      <div className="container">
        <h1 className="my-48 mb-8 text-center text-6xl">Surf Mag</h1>
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
      </div>
    </PageLayout>
  )
}

export default SurfMag
