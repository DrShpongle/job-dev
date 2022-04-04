import * as React from 'react'
import Image from 'next/image'
import {sbEditable} from '@storyblok/storyblok-editable'
import {motion, useViewportScroll, useTransform, useSpring} from 'framer-motion'
import {useWindowSize} from 'react-use'
import classNames from 'classnames'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const SuccessPoints = ({blok}: any) => {
  const refSection = React.useRef<HTMLDivElement>(null)
  const {width, height} = useWindowSize()
  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  let topShift = 100
  if (width < 768) {
    topShift = 100
  }
  if (width >= 768) {
    topShift = -100
  }
  if (width >= 1024) {
    topShift = 300
  }
  if (width >= 1280) {
    topShift = 377
  }
  if (width >= 1536) {
    topShift = 380
  }

  const scaleHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    [4.5, 1.1],
  )

  const slideHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    [topShift, 0],
  )

  const portraitScaleHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    [0.3, 2],
  )

  const portraitSlideHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    ['100%', '0%'],
  )

  const animateSlideHandsWithPhone = useSpring(slideHandsWithPhone, {
    stiffness: 400,
    damping: 90,
  })

  const animateScaleHandsWithPhone = useSpring(scaleHandsWithPhone, {
    stiffness: 400,
    damping: 90,
  })

  return (
    <section ref={refSection} {...sbEditable(blok)} key={blok._uid}>
      <div
        className="sticky top-0 flex h-screen flex-col overflow-hidden bg-white pt-12 md:pt-20 xl:pt-20 portrait:pt-24 md:portrait:pt-20 lg:portrait:pt-32 xl:landscape:pt-24"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container flex grow flex-col items-center 2xl:max-w-[1180px]">
          <h2 className="grow text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            {blok.title}
          </h2>
          <motion.div
            style={{
              scale:
                width / height < 1
                  ? portraitScaleHandsWithPhone
                  : animateScaleHandsWithPhone,
              y:
                width / height < 1
                  ? portraitSlideHandsWithPhone
                  : animateSlideHandsWithPhone,
            }}
            className={classNames(
              'relative z-10 flex w-[300px] shrink-0 origin-center justify-center will-change-transform md:w-full',
              width / height < 1 ? 'origin-bottom' : 'origin-center',
            )}
          >
            <div className="absolute h-[70px] w-[136px] translate-y-6 -translate-x-0.5 md:h-[150px] md:w-[316px] md:-translate-x-1 md:translate-y-14 lg:h-[206px] lg:w-[430px] lg:translate-y-20 lg:-translate-x-2 xl:h-[270px] xl:w-[546px] xl:-translate-x-3 xl:translate-y-24 2xl:h-[240px] 2xl:w-[500px]">
              <VideoEmbed url={blok.video.url} />
            </div>
            <Image
              src="/images/success-points.png"
              width={3000}
              height={1873}
              priority
              alt="Success Points"
            />
          </motion.div>
          <div className="absolute bottom-6 text-center md:max-w-[376px] md:text-xl lg:-translate-x-2 lg:text-xl xl:max-w-[450px] xl:-translate-x-3 portrait:bottom-auto portrait:px-6 portrait:pt-24 md:portrait:top-16 md:portrait:max-w-[500px] md:portrait:text-2xl lg:portrait:top-36 lg:portrait:max-w-[700px] lg:portrait:text-3xl lg:landscape:bottom-8 xl:landscape:bottom-16 xl:landscape:text-2xl">
            {blok.description}
          </div>
        </div>
      </div>
      <div className="h-[250vh]" />
    </section>
  )
}

export default SuccessPoints
