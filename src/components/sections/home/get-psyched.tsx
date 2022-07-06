import * as React from 'react'
import Link from 'next/link'
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
import ImageWithBlur from 'components/image-with-blur'
import {isTouchDevice} from 'utils/is-touch-device'

const GetPsyched: React.FC<any> = ({blok}) => {
  const {width, height} = useWindowSize()
  const refSection = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()
  const controlsLogo = useAnimation()

  const progressDelta = end - start

  let variableOffset = '40%'
  if (width >= 768 && width < 1024) {
    variableOffset = '25%'
  }
  if (width >= 1024 && width / height >= 1) {
    variableOffset = '30%'
  }
  if (width >= 1280 && width / height >= 1) {
    variableOffset = '20%'
  }
  if (width >= 1024 && width / height < 1) {
    variableOffset = '-15%'
  }

  const transitionBlueScreen = useTransform(
    scrollYProgress,
    [start - progressDelta / 7, start + progressDelta / 4],
    [1, 0],
  )

  const scrollText = useTransform(
    scrollYProgress,
    [start + progressDelta / 3, start + (progressDelta / 3) * 2],
    ['0%', '-130%'],
  )

  const scrollIphone = useTransform(
    scrollYProgress,
    [end - (progressDelta / 3) * 2, end],
    ['150%', variableOffset],
  )

  const triggerLogoAnimation = () => {
    if (parseInt(scrollIphone.get()) < parseInt(variableOffset) + 5) {
      controlsLogo.start('shown')
    } else {
      controlsLogo.start('hidden')
    }
  }

  triggerLogoAnimation()

  React.useEffect(() => {
    const unsubscribeY = scrollIphone.onChange(triggerLogoAnimation)
    return () => {
      unsubscribeY()
    }
  })

  return (
    <section ref={refSection} {...sbEditable(blok)}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center bg-blue"
          style={{opacity: transitionBlueScreen}}
        >
          <div className="text-center">
            <h2 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
              Get Psyched
            </h2>
            <h1 className="mt-1 text-5xl leading-none text-white md:max-w-md md:text-6xl lg:max-w-xl lg:text-7xl xl:max-w-3xl xl:text-8xl 2xl:max-w-4xl 2xl:text-[111px]">
              the Jamie O’Brien Surf App
            </h1>
          </div>
        </motion.div>
        <div className="h-1/2 pt-6 pb-6 md:h-[45%] md:pb-8 md:pt-16 lg:hidden">
          <div className="container h-full">
            <div className="flex h-full flex-col">
              <h3 className="mt-4 font-accented text-2xl text-pink md:text-4xl lg:mt-0">
                {blok.title}
              </h3>
              <div className="md:max-w-2xl">
                <h2 className="max-w-[14rem] text-3xl leading-none md:max-w-sm md:text-6xl">
                  {blok.subtitle}
                </h2>
                <p className="mt-2 md:text-xl">{blok.description}</p>
                <Link href="/surf-app">
                  <a className="mt-2 flex items-center space-x-1 font-headings text-pink duration-150 md:text-[29px] hover-hover:hover:text-blue">
                    <span>Learn more</span>
                    <span className="translate-y-0.5">&#62;</span>
                  </a>
                </Link>
              </div>
              {isTouchDevice() && (
                <div className="mt-3 flex w-full items-center space-x-3 lg:hidden">
                  <a
                    href="https://surfapp.app.link/get-psyched"
                    className="flex w-28 md:w-44 xl:w-auto"
                  >
                    <ImageWithBlur
                      src="/images/download-on-app-store.svg"
                      width={240}
                      height={80}
                      alt="Download on App Store"
                    />
                  </a>
                  <a
                    href="https://surfapp.app.link/get-psyched"
                    className="flex w-28 md:w-44 xl:w-auto"
                  >
                    <ImageWithBlur
                      src="/images/get-it-on-google-play.svg"
                      width={240}
                      height={80}
                      alt="Get it on Google Play"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 h-1/2 w-full before:absolute before:inset-0 before:bg-black/20 md:h-[55%] lg:h-full">
          <VideoEmbed url={blok.video_url.url} />
          {isTouchDevice() && (
            <div className="absolute top-6 z-20 hidden w-full justify-center space-x-3 lg:right-12 lg:top-32 lg:flex lg:flex-col lg:items-end lg:space-x-0 lg:space-y-3">
              <a
                href="https://surfapp.app.link/get-psyched"
                className="flex w-28 md:w-44 xl:w-auto"
              >
                <ImageWithBlur
                  src="/images/download-on-app-store.svg"
                  width={240}
                  height={80}
                  alt="Download on App Store"
                />
              </a>
              <a
                href="https://surfapp.app.link/get-psyched"
                className="flex w-28 md:w-44 xl:w-auto"
              >
                <ImageWithBlur
                  src="/images/get-it-on-google-play.svg"
                  width={240}
                  height={80}
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          )}
        </div>
        <motion.div
          className="relative top-40 z-10 hidden w-full px-12 will-change-transform lg:block"
          style={{y: scrollText}}
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
            {isTouchDevice() && (
              <a
                href="https://surfapp.app.link/get-psyched"
                className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white duration-150 md:px-10 md:py-4 md:text-xl xl:text-[29px] hover-hover:hover:bg-blue"
                aria-label="download app"
              >
                Download App
              </a>
            )}
            <Link href="/surf-app">
              <a className="flex items-center space-x-1 font-headings text-pink duration-150 md:text-[29px] hover-hover:hover:text-blue">
                <span>Learn more</span>
                <span className="translate-y-0.5">&#62;</span>
              </a>
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{y: scrollIphone}}
          initial={{y: '100%'}}
          className="absolute bottom-0 left-0 right-0 mx-auto flex w-[280px] translate-y-1/2 justify-center will-change-transform md:w-[380px] lg:w-[460px] xl:w-[540px] 2xl:w-[580px]"
        >
          <ImageWithBlur
            src="/images/iphone-frame-portrait.webp"
            width={909}
            height={1835}
            alt="phone"
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
                <ImageWithBlur
                  src="/images/job-app-logo.webp"
                  width={867}
                  height={664}
                  layout="responsive"
                  alt="app logo"
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
