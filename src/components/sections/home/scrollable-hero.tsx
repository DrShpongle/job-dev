import React from 'react'
import classNames from 'classnames'
import {useWindowSize} from 'react-use'
import {motion, useScroll, useTransform, useAnimation} from 'framer-motion'
import {sbEditable} from '@storyblok/storyblok-editable'

import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const ScrollableHero: React.FC<any> = ({blok}) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const refSection = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refSection)
  const {width, height} = useWindowSize()
  const {scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [start, end], ['33%', '100%'])
  const controlsText = useAnimation()

  React.useEffect(() => {
    setIsMounted(true)
  }, [end])

  const triggerTextAnimation = () => {
    if (parseInt(scale.get()) > 95) {
      controlsText.start('shown')
    } else {
      controlsText.start('hidden')
    }
  }

  triggerTextAnimation()

  useIsomorphicLayoutEffect(() => {
    const unsubscribeY = scale.onChange(triggerTextAnimation)
    return () => {
      unsubscribeY()
    }
  }, [end])

  return (
    <section ref={refSection} {...sbEditable(blok)}>
      <div className="sticky top-0 flex h-screen items-center justify-center bg-blue">
        {isMounted ? (
          <section
            className={classNames(
              'relative flex h-full w-full flex-nowrap justify-center overflow-hidden',
              width >= height ? 'flex-row' : 'flex-col',
            )}
          >
            <div
              className={classNames(
                'relative shrink-0 overflow-hidden',
                width >= height ? 'h-full w-1/2' : 'h-1/2 w-full',
              )}
            >
              <VideoEmbed url={blok.video_left_url.url} />
            </div>
            <motion.div
              className={classNames(
                'absolute top-0 bottom-0 z-10 m-auto flex items-center justify-center overflow-hidden duration-100 will-change-transform before:absolute before:inset-0 before:bg-black/20',
                width >= height ? '!h-full w-1/3' : 'h-1/3 !w-full',
              )}
              style={{width: scale, height: scale}}
            >
              <VideoEmbed url={blok.video_middle_url.url} />
              <div className="absolute left-0 w-full space-y-4 overflow-hidden whitespace-nowrap text-center text-white lg:pr-16 lg:text-right xl:pr-20">
                <motion.h2
                  initial="hidden"
                  variants={{
                    hidden: {x: '150%', opacity: 0},
                    shown: {x: 0, opacity: 1},
                  }}
                  transition={{type: 'spring', duration: 0.8, bounce: 0.2}}
                  animate={controlsText}
                  className="w-full font-accented text-5xl opacity-0 will-change-transform md:text-7xl lg:text-8xl  xl:text-9xl"
                >
                  {blok.title}
                </motion.h2>
                <motion.h3
                  initial="hidden"
                  variants={{
                    hidden: {x: '150%', opacity: 0},
                    shown: {x: 0, opacity: 1},
                  }}
                  transition={{type: 'spring', duration: 0.6, bounce: 0.2}}
                  animate={controlsText}
                  className="w-full font-headings text-2xl opacity-0 will-change-transform md:text-4xl lg:text-5xl  xl:text-6xl"
                >
                  {blok.subtitle}
                </motion.h3>
              </div>
            </motion.div>
            <div
              className={classNames(
                'relative shrink-0 overflow-hidden',
                width >= height ? 'h-full w-1/2' : 'h-1/2 w-full',
              )}
            >
              <VideoEmbed url={blok.video_right_url.url} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 m-auto flex w-32 flex-col items-center space-y-4 text-xl text-white">
              <span>scroll down</span>
              <div className="h-10 w-px bg-white" />
            </div>
          </section>
        ) : null}
      </div>
      <div className="h-[150vh]" />
    </section>
  )
}

export default ScrollableHero
