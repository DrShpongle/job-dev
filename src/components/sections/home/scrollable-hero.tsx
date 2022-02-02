import React from 'react'
import classNames from 'classnames'
import {useWindowSize} from 'react-use'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

import VideoEmbed from 'components/video-embed'

const ScrollableHero: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const refSection = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refSection)
  const {width, height} = useWindowSize()
  const {scrollYProgress} = useViewportScroll()
  const scale = useTransform(scrollYProgress, [start, end], ['33%', '100%'])
  const controlsText = useAnimation()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    // TODO: fix return for this useEffect
    const triggerTextAnimation = () => {
      if (parseInt(scale.get()) > 95) {
        controlsText.start('shown')
      } else {
        controlsText.start('hidden')
      }
    }
    const unsubscribeY = scale.onChange(triggerTextAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  return (
    <section
      ref={refSection}
      className="sticky top-0 flex items-center justify-center h-screen bg-blue"
    >
      {isMounted ? (
        <section
          className={classNames(
            'relative flex justify-center w-full h-full overflow-hidden flex-nowrap',
            width >= height ? 'flex-row' : 'flex-col',
          )}
        >
          <div
            className={classNames(
              'relative overflow-hidden shrink-0',
              width >= height ? 'w-1/2 h-full' : 'h-1/2 w-full',
            )}
          >
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e703b314-1fbc-40c8-8055-e7bc86a78436/e703b314-1fbc-40c8-8055-e7bc86a7.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
          <motion.div
            className={classNames(
              'absolute top-0 bottom-0 z-10 flex justify-center items-center m-auto overflow-hidden duration-100 before:absolute before:bg-black/20 before:inset-0',
              width >= height ? '!h-full w-1/3' : '!w-full h-1/3',
            )}
            style={{width: scale, height: scale}}
          >
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/6fa8aea0-f71d-417a-b36f-7b1b27c8f88d/6fa8aea0-f71d-417a-b36f-7b1b27c8.ism/manifest(format=m3u8-aapl).m3u8" />
            <div className="absolute left-0 w-full space-y-4 overflow-hidden text-center text-white lg:text-right whitespace-nowrap lg:pr-16 xl:pr-20">
              <motion.h2
                initial="hidden"
                variants={{
                  hidden: {x: '150%'},
                  shown: {x: 0},
                }}
                transition={{type: 'spring', duration: 0.8, bounce: 0.2}}
                animate={controlsText}
                className="w-full text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-accented will-change-transform"
              >
                Totally psyched
              </motion.h2>
              <motion.h3
                initial="hidden"
                variants={{
                  hidden: {x: '150%'},
                  shown: {x: '0'},
                }}
                transition={{type: 'spring', duration: 0.6, bounce: 0.2}}
                animate={controlsText}
                className="w-full text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-headings will-change-transform"
              >
                the world of Jamie O&#8217;Brien
              </motion.h3>
            </div>
          </motion.div>
          <div
            className={classNames(
              'relative overflow-hidden shrink-0',
              width >= height ? 'w-1/2 h-full' : 'h-1/2 w-full',
            )}
          >
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/8e6b0635-692a-4da8-8703-8175ba1e470b/8e6b0635-692a-4da8-8703-8175ba1e.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center w-32 m-auto space-y-4 text-xl text-white">
            <span>scroll down</span>
            <div className="w-px h-10 bg-white" />
          </div>
        </section>
      ) : null}
    </section>
  )
}

export default ScrollableHero
