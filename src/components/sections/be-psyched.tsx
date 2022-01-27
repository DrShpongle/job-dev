import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import {useWindowSize} from 'react-use'

const useRefScrollProgress = (inputRef: any) => {
  const ref = inputRef || React.useRef()
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)
  React.useEffect(() => {
    if (!ref.current) {
      return
    }
    const rect = ref.current.getBoundingClientRect()
    const offsetTop = rect.top
    setStart(
      (offsetTop - window.innerHeight) /
        (document.body.clientHeight - window.innerHeight),
    )
    setEnd(offsetTop / (document.body.clientHeight - window.innerHeight))
  }, [])
  return {start, end}
}

const BePsyched = () => {
  const {width} = useWindowSize()
  const refBoards = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refBoards)
  const {scrollYProgress} = useViewportScroll()
  const rangeX = useTransform(scrollYProgress, [start, end], ['-90%', '0%'])
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
  const rotate = useTransform(scrollYProgress, [start, end], [0, 720])

  return (
    <section
      ref={refBoards}
      className="relative z-10 pt-8 overflow-hidden md:pt-10 bg-blue lg:py-20 xl:py-28 2xl:py-36"
    >
      <motion.div
        className="absolute bottom-0 w-full lg:top-0 lg:w-[450px] xl:w-[500px] 2xl:w-[630px] flex"
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
        <div className="flex flex-col lg:flex-row pb-[250px] md:pb-[500px] lg:pb-0">
          <div className="relative flex items-start justify-end lg:pt-48 lg:pr-8 xl:pr-16 2xl:pr-24 grow">
            <motion.div
              className="absolute origin-center shrink-0 w-32 md:w-56 lg:w-[250px] xl:w-[350px] 2xl:w-[487px]"
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
          <div className="lg:w-2/5 xl:w-[45%] pt-12 md:pt-16 lg:pt-0">
            <h3 className="font-accented text-pink text-4xl md:text-5xl xl:text-6xl 2xl:text-[70px]">
              Be Psyched
            </h3>
            <h2 className="text-white text-5xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[111px] leading-none">
              with The
              <br />
              Jamie O’Brien
              <br />
              Experience
            </h2>
            <p className="mt-8 md:mt-12 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal text-white">
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
              optat quam nam nimagnis doloreh enistorro.
            </p>
            <div className="relative flex items-center mt-8 space-x-6 xl:space-x-10">
              <a
                href="https://fareharbor.com/embeds/book/jobsurfexperience/items/?full-items=yes&back=https://www.jobsurfexperience.com/"
                target="_blank"
                rel="noreferrer"
                className="px-6 xl:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl lg:text-lg xl:text-2xl 2xl:text-[29px]"
              >
                Book your experience
              </a>
              <a
                href="https://www.jobsurfexperience.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 md:text-2xl lg:text-xl xl:text-[29px] text-pink font-headings whitespace-nowrap"
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
