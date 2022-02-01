import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const VisualiseAndDo = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 2)
  const {scrollYProgress} = useViewportScroll()

  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    ['30%', '-200%'],
  )

  return (
    <section
      ref={refSection}
      className="sticky top-0 h-screen overflow-hidden bg-white"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
          Visualise and do
        </h2>
        <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal xl:max-w-4xl 2xl:max-w-5xl">
          Jamie improved by watching clips of his favourite surfers over and
          over and over again. The JOB Surf app has technique specific clip
          rolls. You want to watch Jamie land his signature backside barrels on
          repeat so YOU can replicate? We have got you covered!
        </p>
      </div>
      {/* <motion.div
        className="absolute bottom-0 z-10 w-full"
        style={{y: scrollText}}
      >
        <div className="container flex flex-col justify-end">
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
      </motion.div> */}
    </section>
  )
}

export default VisualiseAndDo
