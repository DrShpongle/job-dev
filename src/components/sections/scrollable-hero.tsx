import React, {WheelEvent} from 'react'
import classNames from 'classnames'
import {useWindowSize} from 'react-use'

import VideoEmbed from 'components/video-embed'
import FixedLabel from 'components/fixed-label'

const ScrollableHero: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const {width, height} = useWindowSize()
  const [currentSize, setCurrentWidth] = React.useState<number>(33)

  const handlerChangeWidth = (e: WheelEvent<HTMLDivElement>) => {
    if (currentSize < 100) {
      let scale = currentSize
      scale += e.deltaY * 0.1
      scale = Math.min(Math.max(33, scale), 100)
      setCurrentWidth(scale)
    }
  }

  let clientY: number = 0

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    document.body.style.position = 'fixed'
    if (currentSize === 100) {
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
          onWheel={handlerChangeWidth}
          onTouchStart={(e) => {
            clientY = e.touches[0].clientY
          }}
          onTouchEnd={(e) => {
            const deltaY = e.changedTouches[0].clientY - clientY
            let scale = currentSize
            scale += deltaY * -0.1
            let computedScale = Math.min(Math.max(33, scale), 100)
            setCurrentWidth(computedScale)
          }}
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
              'absolute top-0 bottom-0 z-10 flex justify-center m-auto overflow-hidden',
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
            <div className="absolute left-0 w-full space-y-4 text-center text-white lg:text-right whitespace-nowrap bottom-44 lg:top-48 lg:pr-16 xl:pr-20">
              <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-accented">
                Totally psyched
              </h2>
              <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-headings">
                the world of Jamie O’Brien
              </h3>
            </div>
            <div className="absolute bottom-0 flex flex-col items-center space-y-4 text-xl text-white">
              <span>scroll down</span>
              <div className="w-px h-10 bg-white" />
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
          <FixedLabel
            title="Maldives"
            subtitleTop="win a trip to the"
            subtitleBottom="with Jamie"
            className="fixed right-0 bottom-20"
          />
        </section>
      )}
    </>
  )
}

export default ScrollableHero
