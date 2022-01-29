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

const HeroWithScrollableText = () => {
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
        <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/45f6339a-4429-44d6-a297-ef025d31558b/45f6339a-4429-44d6-a297-ef025d31.ism/manifest(format=m3u8-aapl).m3u8" />
      </div>
    </section>
  )
}

export default HeroWithScrollableText
