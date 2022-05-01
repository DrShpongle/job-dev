import * as React from 'react'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import {isEmpty} from 'lodash'

import {getYoutubeDetails} from 'utils/get-youtube-details'
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

  return (
    <section className="bg-white pt-20 pb-4 md:pt-28 md:pb-6 lg:pt-36 xl:pb-8">
      <div className="container">
        <div className="space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
          <h1 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            {blok.title}
          </h1>
          <p className="mx-auto max-w-4xl text-center md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
            {blok.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
