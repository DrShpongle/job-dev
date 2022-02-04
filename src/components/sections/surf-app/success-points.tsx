import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform, useSpring} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const SuccessPoints = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 2)
  const {scrollYProgress} = useViewportScroll()

  const scaleHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    [3.5, 1],
  )

  const shiftHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    [550, 0],
  )

  const animateShiftHandsWithPhone = useSpring(shiftHandsWithPhone, {
    stiffness: 400,
    damping: 90,
  })

  const animateScaleHandsWithPhone = useSpring(scaleHandsWithPhone, {
    stiffness: 400,
    damping: 90,
  })

  return (
    <section
      ref={refSection}
      className="learn-from-the-best sticky top-0 flex h-screen flex-col overflow-hidden bg-white pt-12 md:pt-20 xl:pt-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container flex grow flex-col">
        <h2 className="grow text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          Success points
        </h2>
        <motion.div
          style={{
            scale: animateScaleHandsWithPhone,
            y: animateShiftHandsWithPhone,
          }}
          //   style={{scale: scaleHandsWithPhone}}
          className="relative z-10 flex shrink-0 origin-center justify-center"
        >
          <div className="trans absolute bg-red-600 md:h-[150px] md:w-[316px] md:-translate-x-1 md:translate-y-14 lg:h-[206px] lg:w-[430px] lg:translate-y-20 lg:-translate-x-2 xl:h-[270px] xl:w-[546px] xl:-translate-x-3 xl:translate-y-24 2xl:h-[326px] 2xl:w-[670px] 2xl:translate-y-28">
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
          <Image src="/images/success-points.png" width={2560} height={1598} />
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessPoints
