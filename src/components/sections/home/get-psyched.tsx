import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useWindowSize} from 'react-use'
import {sbEditable} from '@storyblok/storyblok-editable'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const GetPsyched: React.FC<any> = ({blok}) => {
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

  const triggerLogoAnimation = () => {
    if (parseInt(scaleIphone.get()) < parseInt(variableOffset) + 5) {
      controlsLogo.start('shown')
    } else {
      controlsLogo.start('hidden')
    }
  }

  triggerLogoAnimation()

  React.useEffect(() => {
    const unsubscribeY = scaleIphone.onChange(triggerLogoAnimation)
    return () => {
      unsubscribeY()
    }
  })

  return (
    <section ref={refSection} {...sbEditable(blok)} key={blok._uid}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="h-1/2 pt-10 pb-6 md:h-[45%] md:pb-8 md:pt-16 lg:hidden">
          <div className="container h-full">
            <div className="flex h-full flex-col">
              <h3 className="font-accented text-3xl text-pink md:text-4xl">
                {blok.title}
              </h3>
              <div className="grow md:max-w-2xl">
                <h2 className="max-w-[14rem] text-4xl leading-none md:max-w-sm md:text-6xl">
                  {blok.subtitle}
                </h2>
                <p className="mt-4 md:text-xl">{blok.description}</p>
              </div>
              <div className="flex items-center space-x-6 md:space-x-10">
                <button className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white duration-150 md:px-10 md:py-4 md:text-xl xl:text-[29px] hover-hover:hover:bg-blue">
                  Download App
                </button>
                <a
                  href="#"
                  className="flex items-center space-x-1 font-headings text-pink duration-150 md:text-[29px] hover-hover:hover:text-blue"
                >
                  <span>Learn more</span>
                  <span className="translate-y-0.5">&#62;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-1/2 w-full before:absolute before:inset-0 before:bg-black/20 md:h-[55%] lg:h-full">
          <VideoEmbed url={blok.video_url.url} />
          <div className="absolute top-6 z-20 flex w-full justify-center space-x-3 lg:right-12 lg:top-32 lg:flex-col lg:items-end lg:space-x-0 lg:space-y-3">
            <a href="#" className="flex w-28 md:w-44 xl:w-auto">
              <Image
                src="/images/download-on-app-store.svg"
                width={240}
                height={80}
                alt="Download on App Store"
              />
            </a>
            <a href="#" className="flex w-28 md:w-44 xl:w-auto">
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
          className="relative top-40 z-10 hidden w-full px-12 will-change-transform lg:block"
          style={{y: scaleText}}
        >
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            {blok.title}
          </h3>
          <div className="max-w-[44rem] text-white">
            <h2 className="mt-1 text-5xl leading-none md:text-6xl lg:max-w-md lg:text-7xl xl:max-w-lg xl:text-8xl 2xl:max-w-2xl 2xl:text-[111px]">
              {blok.subtitle}
            </h2>
            <p className="mt-12 md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
              {blok.description}
            </p>
          </div>
          <div className="mt-8 flex items-center space-x-6 md:space-x-10">
            <button className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white duration-150 md:px-10 md:py-4 md:text-xl xl:text-[29px] hover-hover:hover:bg-blue">
              Download App
            </button>
            <a
              href="#"
              className="flex items-center space-x-1 font-headings text-pink duration-150 md:text-[29px] hover-hover:hover:text-blue"
            >
              <span>Learn more</span>
              <span className="translate-y-0.5">&#62;</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          style={{y: scaleIphone}}
          initial={{y: '100%'}}
          className="absolute bottom-0 left-0 right-0 mx-auto flex w-[280px] translate-y-1/2 justify-center will-change-transform md:w-[380px] lg:w-[460px] xl:w-[540px] 2xl:w-[580px]"
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
                className="will-change-transform"
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
      </div>
      <div className="h-[150vh]" />
    </section>
  )
}

export default GetPsyched
