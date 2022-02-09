import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useWindowSize} from 'react-use'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const GetPsyched = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const {width, height} = useWindowSize()
  const refSection = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()
  const controlsLogo = useAnimation()

  let variableOffset = '30%'
  if (width < 768) {
    variableOffset = '50%'
  }
  if (width >= 768 && width < 1024) {
    variableOffset = '40%'
  }
  if (width >= 1024 && width / height >= 1) {
    variableOffset = '30%'
  }
  if (width >= 1024 && width / height < 1) {
    variableOffset = '10%'
  }

  const scaleIphone = useTransform(
    scrollYProgress,
    [start, end],
    ['150%', variableOffset],
  )
  const scaleText = useTransform(
    scrollYProgress,
    [start * 1.25, end],
    ['0%', '-150%'],
  )

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    const triggerLogoAnimation = () => {
      if (parseInt(scaleIphone.get()) < parseInt(variableOffset) + 5) {
        controlsLogo.start('shown')
      } else {
        controlsLogo.start('hidden')
      }
    }
    const unsubscribeY = scaleIphone.onChange(triggerLogoAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  return (
    <section
      ref={refSection}
      className="sticky top-0 h-screen overflow-hidden bg-white"
    >
      <div className="h-1/2 pt-10 pb-6 md:h-[45%] md:pb-8 md:pt-16 lg:hidden">
        <div className="container h-full">
          <div className="flex h-full flex-col">
            <h3 className="font-accented text-3xl text-pink md:text-4xl">
              Get Psyched
            </h3>
            <div className="grow md:max-w-2xl">
              <h2 className="text-4xl leading-none md:text-6xl">
                with Jamie in
                <br /> your pocket
              </h2>
              <p className="mt-4 md:text-xl">
                Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
                nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
                optat quam nam nimagnis doloreh enistorro vendis voluptaqua.
              </p>
            </div>
            <div className="flex items-center space-x-6 md:space-x-10">
              <button className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white md:px-10 md:py-4 md:text-xl xl:text-[29px]">
                Download App
              </button>
              <a
                href="#"
                className="flex items-center space-x-1 font-headings text-pink md:text-[29px]"
              >
                <span>Learn more</span>
                <span className="translate-y-0.5">&#62;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-1/2 w-full before:absolute before:inset-0 before:bg-black/20 md:h-[55%] lg:h-full">
        <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/cd6b1fd0-371d-4331-8bc8-4ba52442e0ed/cd6b1fd0-371d-4331-8bc8-4ba52442.ism/manifest(format=m3u8-aapl).m3u8" />
        <div className="absolute top-6 z-20 flex w-full justify-center space-x-3 lg:right-12 lg:top-32 lg:flex-col lg:items-end lg:space-x-0 lg:space-y-3">
          <a href="#" className="w-28 md:w-44 xl:w-auto">
            <Image
              src="/images/download-on-app-store.svg"
              width={240}
              height={80}
              alt="Download on App Store"
            />
          </a>
          <a href="#" className="w-28 md:w-44 xl:w-auto">
            <Image
              src="/images/get-it-on-google-play.svg"
              width={240}
              height={80}
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
      {isMounted ? (
        <>
          <motion.div
            className="relative top-40 z-10 hidden w-full px-12 lg:block"
            style={{y: scaleText}}
          >
            <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
              Get Psyched
            </h3>
            <div className="max-w-[44rem] text-white">
              <h2 className="mt-1 text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
                with Jamie in
                <br /> your pocket
              </h2>
              <p className="mt-12 md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
                Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
                nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
                optat quam nam nimagnis doloreh enistorro vendis voluptaqua.
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-6 md:space-x-10">
              <button className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white md:px-10 md:py-4 md:text-xl xl:text-[29px]">
                Download App
              </button>
              <a
                href="#"
                className="flex items-center space-x-1 font-headings text-pink md:text-[29px]"
              >
                <span>Learn more</span>
                <span className="translate-y-0.5">&#62;</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{y: scaleIphone}}
            initial={{y: '100%'}}
            className="absolute bottom-0 left-0 right-0 mx-auto flex w-[280px] translate-y-1/2 justify-center md:w-[380px] lg:w-[460px] xl:w-[540px] 2xl:w-[580px]"
          >
            <Image
              src="/images/iphone-frame-portrait.png"
              width={909}
              height={1835}
              alt="Jamie O'Brien"
              priority
            />
            <div className="absolute top-[15%] w-4/5">
              <div className="w-full">
                <motion.div
                  variants={{hidden: {opacity: 0}, shown: {opacity: 1}}}
                  initial="hidden"
                  animate={controlsLogo}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Image
                    src="/images/job-app-logo.png"
                    width={867}
                    height={664}
                    layout="responsive"
                    alt="Jamie O'Brien"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </section>
  )
}

export default GetPsyched
