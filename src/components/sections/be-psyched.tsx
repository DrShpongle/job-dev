import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const BePsyched = () => {
  const refBoards = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refBoards)
  console.log('start:', start)
  console.log('end:', end)
  const {scrollYProgress} = useViewportScroll()
  const x = useTransform(scrollYProgress, [start, end], ['-90%', '0%'])

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const rotate = useTransform(scrollYProgress, [start, end], [0, 720])

  const handlerScroll = () => {
    const rect = refBoards.current.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    console.log('scrollTop:', scrollTop)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handlerScroll)
  }, [])

  return (
    <section ref={refBoards} className="relative overflow-hidden bg-blue py-36">
      <motion.div
        className="absolute top-0"
        initial={{x: '-100%'}}
        style={{x, y: '-2rem'}}
        transition={{
          type: 'spring',
          damping: 10,
          mass: 0.75,
          stiffness: 100,
        }}
      >
        <Image
          src="/images/windsurfing-boards.png"
          width={630}
          height={1190}
          priority
        />
      </motion.div>
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          <div className="relative flex justify-end pt-48 pr-24 grow">
            <motion.div className="shrink-0" style={{opacity, rotate}}>
              <Image
                src="/images/job-surf-experience-logo.png"
                width={487}
                height={492}
                priority
              />
            </motion.div>
          </div>
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
