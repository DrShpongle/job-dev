import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const FullyLoaded = () => {
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
      className="min-h-screen py-12 bg-slate-100 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
          Fully loaded with
          <br />
          Jamie’s top tips.
        </h2>
        <p className="mt-4 md:mt-8 md:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal md:max-w-xl xl:max-w-3xl">
          Sometimes you need that little bit more. Jamie runs through the most
          common problems with each technique to help you NAIL your surfing
          goals.
        </p>
      </div>
    </section>
  )
}

export default FullyLoaded
