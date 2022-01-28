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
  const {width, height} = useWindowSize()
  const refGetPsyched = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refGetPsyched)
  const {scrollYProgress} = useViewportScroll()
  const controlsLogo = useAnimation()

  let valueToSwitch = '30%'
  if (width < 768) {
    valueToSwitch = '50%'
  }
  if (width >= 768 && width < 1024) {
    valueToSwitch = '40%'
  }
  if (width >= 1024 && width / height >= 1) {
    valueToSwitch = '30%'
  }
  if (width >= 1024 && width / height < 1) {
    valueToSwitch = '10%'
  }

  const scaleIphone = useTransform(
    scrollYProgress,
    [start, end],
    ['150%', valueToSwitch],
  )
  const scaleText = useTransform(
    scrollYProgress,
    [start * 1.25, end],
    ['0%', '-150%'],
  )

  React.useEffect(() => {
    const triggerLogoAnimation = () => {
      if (parseInt(scaleIphone.get()) < parseInt(valueToSwitch) + 5) {
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
      ref={refGetPsyched}
      className="sticky top-0 z-[1] h-screen overflow-hidden bg-white"
    >
      <div className="pt-10 pb-6 md:pb-8 md:pt-16 lg:hidden h-1/2 md:h-[45%]">
        <div className="container h-full">
          <div className="flex flex-col h-full">
            <h3 className="text-3xl md:text-4xl text-pink font-accented">
              Get Psyched
            </h3>
            <div className="md:max-w-2xl grow">
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
              <button className="px-6 md:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl xl:text-[29px]">
                Download App
              </button>
              <a
                href="#"
                className="flex items-center space-x-1 md:text-[29px] text-pink font-headings"
              >
                <span>Learn more</span>
                <span className="translate-y-0.5">&#62;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-1/2 md:h-[55%] lg:h-full">
        <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
        <div className="absolute z-20 flex justify-center w-full space-x-3 lg:items-end lg:right-12 top-6 lg:top-32 lg:space-x-0 lg:space-y-3 lg:flex-col">
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

      <motion.div
        className="relative z-10 hidden w-full px-12 top-40 lg:block"
        style={{y: scaleText}}
      >
        <h3 className="text-pink text-5xl xl:text-6xl 2xl:text-[70px] font-accented">
          Get Psyched
        </h3>
        <div className="max-w-[44rem] text-white">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
            with Jamie in
            <br /> your pocket
          </h2>
          <p className="mt-12 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut optat quam
            nam nimagnis doloreh enistorro vendis voluptaqua.
          </p>
        </div>
        <div className="flex items-center mt-8 space-x-6 md:space-x-10">
          <button className="px-6 md:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl xl:text-[29px]">
            Download App
          </button>
          <a
            href="#"
            className="flex items-center space-x-1 md:text-[29px] text-pink font-headings"
          >
            <span>Learn more</span>
            <span className="translate-y-0.5">&#62;</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{y: scaleIphone}}
        initial={{y: '100%'}}
        className="w-[280px] md:w-[380px] lg:w-[460px] xl:w-[540px] 2xl:w-[580px] absolute mx-auto bottom-0 left-0 right-0 translate-y-1/2 flex justify-center"
      >
        <Image
          src="/images/iphone-frame-portrait.png"
          width={909}
          height={1835}
          alt="Jamie O'Brien"
          priority
        />
        <div className="absolute w-4/5 top-[15%]">
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
    </section>
  )
}

export default GetPsyched
