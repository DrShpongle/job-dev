import React, {WheelEvent} from 'react'
import classNames from 'classnames'
import {useWindowSize} from 'react-use'
import {debounce} from 'lodash'
import {motion} from 'framer-motion'

import VideoEmbed from 'components/video-embed'

const ScrollableHero: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const [clientY, setClientY] = React.useState(0)
  const {width, height} = useWindowSize()
  const [currentSize, setCurrentWidth] = React.useState<number>(33)

  const handlerChangeWidth = (e: WheelEvent<HTMLDivElement>) => {
    let scale = currentSize
    scale += e.deltaY * 0.1
    scale = Math.min(Math.max(33, scale), 100)
    setCurrentWidth(scale)
  }

  const handlerOnTouchMove = (e: any) => {
    const deltaY = e.targetTouches[0].clientY - clientY
    let scale = currentSize
    scale += deltaY * -0.1
    let computedScale = Math.min(Math.max(33, scale), 100)
    setCurrentWidth(computedScale)
  }

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    if (currentSize < 100) {
      document.body.style.position = 'fixed'
    }
    if (currentSize == 100) {
      document.body.style.position = ''
    }
    return () => {
      document.body.style.position = ''
    }
  }, [currentSize])

  return (
    <>
      <style jsx>
        {`
          .full-screen-height {
            height: calc(var(--real100vh) - 40px);
          }
          @media (min-width: 768px) {
            .full-screen-height {
              height: calc(var(--real100vh) - 56px);
            }
          }
          @media (min-width: 1024px) {
            .full-screen-height {
              height: calc(var(--real100vh) - 80px);
            }
          }
        `}
      </style>
      {isMounted && (
        <section
          className={classNames(
            'relative flex justify-center w-full overflow-hidden flex-nowrap full-screen-height mt-10 md:mt-14 lg:mt-20',
            currentSize < 100 && 'touch-none',
            width >= height ? 'flex-row' : 'flex-col',
          )}
          onWheel={debounce(handlerChangeWidth, 30)}
          onTouchStart={(e) => {
            setClientY(e.touches[0].clientY)
          }}
          onTouchMove={debounce(handlerOnTouchMove, 5)}
        >
          <div
            className={classNames(
              'relative overflow-hidden shrink-0',
              width >= height ? 'w-1/2 h-full' : 'h-1/2 w-full',
            )}
          >
            <VideoEmbed
              src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
              className="absolute left-0 object-center"
            />
          </div>
          <div
            className={classNames(
              'absolute top-0 bottom-0 z-10 flex justify-center m-auto overflow-hidden duration-100',
              width >= height ? 'h-full w-1/3' : 'w-full h-1/3',
            )}
            style={
              width >= height
                ? {width: `${currentSize}%`}
                : {height: `${currentSize}%`}
            }
          >
            <VideoEmbed
              src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_014_preview.mp4"
              className="absolute object-center"
            />
            <div className="absolute left-0 w-full space-y-4 overflow-hidden text-center text-white lg:text-right whitespace-nowrap bottom-44 lg:top-64 lg:pr-16 xl:pr-20">
              <motion.h2
                initial="hidden"
                variants={{
                  hidden: {x: '-100%', opacity: 0},
                  shown: {x: 0, opacity: 1},
                }}
                transition={{type: 'spring', duration: 1.0, bounce: 0.3}}
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
                transition={{type: 'spring', duration: 1.0, bounce: 0.3}}
                animate={currentSize >= 100 ? 'shown' : 'hidden'}
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-headings"
              >
                the world of Jamie O’Brien
              </motion.h3>
            </div>
          </div>
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
      )}
    </>
  )
}

export default ScrollableHero
