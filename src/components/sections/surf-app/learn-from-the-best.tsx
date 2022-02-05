import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const LearnFromTheBest = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 2)
  const {scrollYProgress} = useViewportScroll()

  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    ['20%', '-100%'],
  )

  return (
    <section
      ref={refSection}
      className="learn-from-the-best sticky top-0 h-screen overflow-hidden bg-white bg-cover"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="relative h-full w-full">
        <Image
          layout="fill"
          className="pointer-events-none object-cover object-center"
          src="/images/learn-from-the-best.jpg"
          alt="Learn from the best"
        />
      </div>
      <motion.div
        className="absolute bottom-0 z-10 flex h-full w-full flex-col justify-end"
        style={{y: scrollText}}
      >
        <div className="container">
          <h2 className="text-5xl leading-none text-white md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            Learn from
            <br className="block md:hidden" /> the
            <br className="hidden md:block" /> best
            <br className="block md:hidden" /> not the
            <br /> lineup
            <br className="block md:hidden" /> kook
          </h2>
          <p className="mt-4 text-white md:mt-8 md:max-w-xl md:text-2xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
            When it comes to surfers, everyone loves to play the guru. We all
            get advice in the line up, but how do we know what actually works?
            Get yourself a PROVEN PRO to give you advice in the line up. Start
            improving your bottom turn so you can actually smash the lip, or,
            what about creating so much spray it looks like this:{' '}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default LearnFromTheBest
