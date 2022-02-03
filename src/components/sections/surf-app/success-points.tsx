import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform, useSpring} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const SuccessPoints = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 1.5)
  const {scrollYProgress} = useViewportScroll()

  const scaleHandsWithPhone = useTransform(
    scrollYProgress,
    [start, end],
    [3.5, 1],
  )

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
          style={{scale: animateScaleHandsWithPhone}}
          //   style={{scale: scaleHandsWithPhone}}
          className="relative z-10 flex shrink-0 origin-center justify-center"
        >
          <div className="trans absolute h-[330px] w-[670px] -translate-x-3 translate-y-28 bg-red-600">
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
          <Image src="/images/success-points.png" width={2560} height={1598} />
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessPoints
