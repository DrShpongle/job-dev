import * as React from 'react'
import type {NextPage} from 'next'
import classNames from 'classnames'
import {useWindowSize} from 'react-use'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import VideoEmbed from 'components/video-embed'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const Landing: NextPage = () => {
  const refBoards = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refBoards)
  console.log('start:', start)
  console.log('end:', end)
  const {width, height} = useWindowSize()
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const {scrollYProgress} = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 0.25], ['33%', '100%'])
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return isMounted ? (
    <div className="relative min-h-screen">
      <section
        ref={refBoards}
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
              <VideoEmbed
                src="/videos/left-side.mov"
                className="absolute left-0 object-center"
              />
            </div>
            <motion.div
              className={classNames(
                'absolute top-0 bottom-0 z-10 flex justify-center m-auto overflow-hidden duration-100',
                width >= height ? '!h-full w-1/3' : '!w-full h-1/3',
              )}
              style={{width: scale, height: scale}}
            >
              <VideoEmbed
                src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_014_preview.mp4"
                className="absolute object-center"
              />
              {/* <div className="absolute left-0 w-full space-y-4 overflow-hidden text-center text-white lg:text-right whitespace-nowrap bottom-44 lg:top-64 lg:pr-16 xl:pr-20">
                <motion.h2
                  initial="hidden"
                  variants={{
                    hidden: {x: '-100%', opacity: 0},
                    shown: {x: 0, opacity: 1},
                  }}
                  transition={{type: 'spring', duration: 1.5, bounce: 0.3}}
                  animate={currentSize >= 100 ? 'shown' : 'hidden'}
                  className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-accented"
                >
                  Totally psyched
                </motion.h2>
                <motion.h3
                  initial="hidden"
                  variants={{
                    hidden: {x: '100%', opacity: 0},
                    shown: {x: '0', opacity: 1},
                  }}
                  transition={{type: 'spring', duration: 1.5, bounce: 0.3}}
                  animate={currentSize >= 100 ? 'shown' : 'hidden'}
                  className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-headings"
                >
                  the world of Jamie O&#8217;Brien
                </motion.h3>
              </div> */}
            </motion.div>
            <div
              className={classNames(
                'relative overflow-hidden shrink-0',
                width >= height ? 'w-1/2 h-full' : 'h-1/2 w-full',
              )}
            >
              <VideoEmbed
                src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_13B_Bali_1080p_005_preview.mp4"
                className="absolute right-0 object-center"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center w-32 m-auto space-y-4 text-xl text-white">
              <span>scroll down</span>
              <div className="w-px h-10 bg-white" />
            </div>
          </section>
        ) : null}
      </section>
      <section className="h-screen"></section>
      <section className="sticky top-0 h-screen overflow-hidden bg-green-500">
        <VideoEmbed
          src="/videos/get-psyched.mp4"
          className="absolute bottom-0 z-[-1] w-auto h-full"
        />
      </section>
      <section className="h-screen"></section>
      <section className="relative h-screen bg-green-500"></section>
    </div>
  ) : null
}

export default Landing
