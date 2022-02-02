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
      className="sticky top-0 h-screen overflow-hidden bg-white bg-cover learn-from-the-best"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <Image
        layout="fill"
        className="object-cover object-center pointer-events-none"
        src="/images/learn-from-the-best.jpg"
        alt="Learn from the best"
        priority
      />
      <motion.div
        className="absolute bottom-0 z-10 flex flex-col justify-end w-full h-full"
        style={{y: scrollText}}
      >
        <div className="container">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
            Learn from
            <br className="block md:hidden" /> the
            <br className="hidden md:block" /> best
            <br className="block md:hidden" /> not the
            <br /> lineup
            <br className="block md:hidden" /> kook
          </h2>
          <p className="mt-4 md:mt-8 md:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal md:max-w-xl xl:max-w-3xl text-white">
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
