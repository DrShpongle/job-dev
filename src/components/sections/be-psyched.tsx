import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const BePsyched = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(ref)
  const {scrollYProgress} = useViewportScroll()
  const x = useTransform(scrollYProgress, [start, end], ['-90%', '0%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-blue py-36">
      <motion.div
        className="absolute top-0 -translate-y-6"
        initial={{x: '-90%'}}
        style={{x}}
      >
        <Image
          src="/images/windsurfing-boards.png"
          width={630}
          height={1190}
          priority
        />
      </motion.div>
      <div className="container">
        <div className="flex justify-end">
          <div className="w-2/5 2xl:w-[45%]">
            <h3 className="font-accented text-pink text-[70px]">Be Psyched</h3>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
              with The Jamie O’Brien Experience
            </h2>
            <p className="mt-12 text-[34px] leading-normal text-white">
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
              optat quam nam nimagnis doloreh enistorro.
            </p>
            <div className="flex items-center mt-8 space-x-10">
              <button className="px-10 py-3 text-white uppercase rounded-full bg-pink font-headings text-lg md:text-xl xl:text-[29px]">
                Book your experience
              </button>
              <a
                href="#"
                className="flex items-center space-x-1 text-[29px] text-pink font-headings"
              >
                <span>Learn more</span>
                <span className="translate-y-0.5">&#62;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BePsyched
