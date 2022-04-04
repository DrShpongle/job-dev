import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {sbEditable} from '@storyblok/storyblok-editable'
// import {useWindowSize} from 'react-use'

import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoPlayer from 'components/video-player'
import {IconPlay, IconPause, IconVolumeOn, IconVolumeOff} from 'lib/icons'

const AskJamie = ({blok}: any) => {
  // const {width} = useWindowSize()
  const refSection = React.useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = React.useState(true)
  const [muted, setMuted] = React.useState(true)

  // let showAnimation = false
  // if (isFinite(width) && width >= 768) {
  //   showAnimation = true
  // }

  const scrollingTextArr = blok.questions_block.map((item: any) => {
    return item.text_line
  })

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()
  const controlsText = useAnimation()

  const scrollText = useTransform(scrollYProgress, [start, end], [0, 1])

  const scrollPhone = useTransform(
    scrollYProgress,
    [start, start + (end - start) * 0.8],
    ['80%', '0%'],
  )

  useIsomorphicLayoutEffect(() => {
    const triggerTextAnimation = () => {
      if (scrollText.get() > 0.6) {
        controlsText.start('shown')
      } else {
        controlsText.start('hidden')
      }
    }
    const unsubscribeY = scrollText.onChange(triggerTextAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  const containerVariants = {
    hidden: {opacity: 0},
    shown: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const itemVariants = {
    hidden: {opacity: 0, y: '90%', scale: 0.3},
    shown: {opacity: 1, y: '0%', scale: 1.0},
  }

  return (
    <section ref={refSection} {...sbEditable(blok)} key={blok._uid}>
      <div
        className="top-0 flex min-h-screen items-center bg-white py-12 md:sticky md:pb-0 md:pt-20 lg:items-stretch xl:pt-24"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <div className="grid h-full gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
                {blok.title}
              </h2>
              <p className="relative z-10 mt-4 md:mt-8 md:max-w-xl md:text-xl lg:max-w-2xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
                {blok.description}
              </p>
              <motion.ul
                className="mt-16 hidden space-y-8 will-change-transform md:block lg:space-y-12"
                variants={containerVariants}
                initial="shown"
                animate={controlsText}
              >
                {scrollingTextArr.map((item: string, index: number) => {
                  return (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="will-change-transform"
                    >
                      <h3 className="text-5xl leading-none text-pink md:text-3xl xl:text-4xl 2xl:text-5xl">
                        {item}
                      </h3>
                    </motion.li>
                  )
                })}
              </motion.ul>
              <ul className="mt-8 space-y-6 md:hidden">
                {scrollingTextArr.map((item: string, index: number) => {
                  return (
                    <li key={index} className="will-change-transform">
                      <h3 className="text-2xl leading-none text-pink">
                        {item}
                      </h3>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="relative flex flex-col items-center justify-center md:flex-row md:items-stretch md:overflow-hidden">
              <motion.div
                className="relative hidden w-full max-w-[580px] md:block"
                style={{y: scrollPhone}}
                transition={{
                  stiffness: 400,
                  damping: 90,
                }}
              >
                <div className="absolute w-full">
                  <div className="border-radius-fix absolute inset-1 overflow-hidden rounded-[30px] md:inset-2 md:rounded-[50px] xl:inset-3 xl:rounded-[60px] 2xl:inset-4">
                    <VideoPlayer
                      url={blok.video.url}
                      controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
                      externalControls={true}
                      playing={playing}
                      muted={muted}
                    />
                  </div>
                  <div className="pointer-events-none">
                    <Image
                      src="/images/iphone-frame-portrait.png"
                      width={580}
                      height={1171}
                      alt="Ask Jamie"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
              <div className="relative w-full max-w-[290px] md:hidden">
                <div className="w-full">
                  <div className="border-radius-fix absolute inset-2 overflow-hidden rounded-[40px] md:inset-2 md:rounded-[50px] xl:inset-3 xl:rounded-[60px] 2xl:inset-4 2xl:rounded-[50px]">
                    <VideoPlayer
                      url={blok.video.url}
                      controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
                      externalControls={true}
                      playing={playing}
                      muted={muted}
                    />
                  </div>
                  <div className="pointer-events-none">
                    <Image
                      src="/images/iphone-frame-portrait.png"
                      width={580}
                      height={1171}
                      alt="Ask Jamie"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="z-10 mt-4 flex w-full items-center justify-center space-x-2 md:absolute md:right-64 md:bottom-10 md:mt-0 md:space-x-4 lg:right-0">
                <button
                  onClick={() => setPlaying(!playing)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-black/70 md:bg-gray/40 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
                >
                  {playing ? (
                    <IconPause className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                  ) : (
                    <IconPlay className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                  )}
                </button>
                <button
                  onClick={() => setMuted(!muted)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-black/70 md:bg-gray/40 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
                >
                  {muted ? (
                    <IconVolumeOff className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                  ) : (
                    <IconVolumeOn className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden h-[200vh] md:block" />
    </section>
  )
}

export default AskJamie
