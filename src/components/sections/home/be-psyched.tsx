import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import {useWindowSize} from 'react-use'

import {useRefScrollProgressFromTop} from 'hooks/useRefScrollProgressFromTop'

const BePsyched = () => {
  const {width} = useWindowSize()
  const refBoards = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgressFromTop(refBoards)
  const {scrollYProgress} = useViewportScroll()
  const rangeX = useTransform(scrollYProgress, [start, end], ['-90%', '0%'])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const rotate = useTransform(scrollYProgress, [start, end], [0, 720])

  return (
    <section
      ref={refBoards}
      className="relative min-h-screen overflow-hidden bg-blue pt-8 md:pt-10 lg:py-20 xl:py-28 2xl:py-36"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <motion.div
        className="absolute bottom-0 flex w-full lg:top-0 lg:w-[450px] xl:w-[500px] 2xl:w-[630px]"
        initial={width >= 1024 ? {x: '-90%'} : {}}
        style={width >= 1024 ? {x: rangeX} : {}}
        transition={{
          type: 'spring',
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
      >
        {width >= 1024 ? (
          <Image
            src="/images/windsurfing-boards-vertical.png"
            width={630}
            height={1190}
            priority
          />
        ) : (
          <Image
            src="/images/windsurfing-boards-horizontal.png"
            width={1536}
            height={813}
            priority
          />
        )}
      </motion.div>
      <div className="container">
        <div className="flex flex-col pb-[250px] md:pb-[500px] lg:flex-row lg:pb-0">
          <div className="relative flex grow items-start justify-end lg:pt-48 lg:pr-8 xl:pr-16 2xl:pr-24">
            <motion.div
              className="absolute w-32 shrink-0 origin-center md:w-56 lg:w-[250px] xl:w-[350px] 2xl:w-[487px]"
              style={width >= 1024 ? {opacity, rotate} : {}}
            >
              <Image
                src="/images/job-surf-experience-logo.png"
                width={487}
                height={492}
                priority
              />
            </motion.div>
          </div>
          <div className="pt-12 md:pt-16 lg:w-2/5 lg:pt-0 xl:w-[45%]">
            <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
              Be Psyched
            </h3>
            <h2 className="text-5xl leading-none text-white md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[111px]">
              with The
              <br />
              Jamie O’Brien
              <br />
              Experience
            </h2>
            <p className="mt-8 text-white md:mt-12 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
              optat quam nam nimagnis doloreh enistorro.
            </p>
            <div className="relative mt-8 flex items-center space-x-6 xl:space-x-10">
              <a
                href="https://fareharbor.com/embeds/book/jobsurfexperience/items/?full-items=yes&back=https://www.jobsurfexperience.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white md:py-4 md:text-xl lg:text-lg xl:px-10 xl:text-2xl 2xl:text-[29px]"
              >
                Book your experience
              </a>
              <a
                href="https://www.jobsurfexperience.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 whitespace-nowrap font-headings text-pink md:text-2xl lg:text-xl xl:text-[29px]"
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
