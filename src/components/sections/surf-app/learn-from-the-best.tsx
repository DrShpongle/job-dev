import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const LearnFromTheBest = ({blok}: any) => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    ['20%', '-100%'],
  )

  return (
    <section ref={refSection}>
      <div
        className="sticky top-0 h-screen overflow-hidden bg-white bg-cover"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="relative h-full w-full">
          <Image
            layout="fill"
            className="pointer-events-none object-cover object-center"
            src={blok.background_image.filename}
            alt="Learn from the best"
          />
        </div>
        <motion.div
          className="absolute bottom-0 z-10 flex h-full w-full flex-col justify-end"
          style={{y: scrollText}}
        >
          <div className="container">
            <div className="max-w-3xl font-headings text-5xl leading-none text-white md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
              {blok.title}
            </div>
            <p className="mt-4 text-white md:mt-8 md:max-w-xl md:text-2xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
              {blok.description}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-[200vh]" />
    </section>
  )
}

export default LearnFromTheBest
