import React, {WheelEvent} from 'react'
import classNames from 'classnames'
import {useWindowSize} from 'react-use'

import VideoEmbed from 'components/video-embed'

const ScrollableHero: React.FC = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const {width} = useWindowSize()
  const [currentSize, setCurrentWidth] = React.useState<number>(33)

  const handlerChangeWidth = (e: WheelEvent<HTMLDivElement>) => {
    let scale = currentSize
    scale += e.deltaY * 0.1
    scale = Math.min(Math.max(33, scale), 100)
    setCurrentWidth(scale)
  }

  let clientY: number = 0

  React.useEffect(() => {
    setIsMounted(true)
  })

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
            height: calc(var(--real100vh) - 80px);
          }
        `}
      </style>
      {isMounted && (
        <section
          className={classNames(
            'relative flex flex-col lg:flex-row justify-center w-full overflow-hidden flex-nowrap full-screen-height mt-20',
            currentSize < 100 && 'touch-none',
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
          <div className="relative overflow-hidden h-1/2 lg:w-1/2 lg:h-full shrink-0">
            <VideoEmbed
              src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
              className="absolute left-0 object-center"
            />
          </div>
          <div
            className="absolute top-0 bottom-0 z-10 flex justify-center w-full m-auto overflow-hidden h-1/3 lg:w-1/3 lg:h-full"
            style={
              width < 1024
                ? {height: `${currentSize}%`}
                : {width: `${currentSize}%`}
            }
          >
            <VideoEmbed
              src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_014_preview.mp4"
              className="absolute object-center"
            />
            <div className="absolute bottom-0 flex flex-col items-center space-y-4 text-xl text-white">
              <span>scroll down</span>
              <div className="w-px h-10 bg-white" />
            </div>
          </div>
          <div className="relative overflow-hidden h-1/2 lg:w-1/2 lg:h-full shrink-0">
            <VideoEmbed
              src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_13B_Bali_1080p_005_preview.mp4"
              className="absolute right-0 object-center"
            />
          </div>
          <div className="absolute right-0 z-20 flex flex-col items-center justify-center h-32 p-3 text-xl text-center text-white uppercase rounded-l-full bottom-20 w-80 bg-blue font-headings shadow-[5px_10px_6px_0px_rgba(0,0,0,0.5)]">
            <div>win a trip to the</div>
            <div className="absolute text-6xl text-pink font-accented">
              Maldives
            </div>
            <div className="mt-10">with Jamie</div>
          </div>
        </section>
      )}
    </>
  )
}

export default ScrollableHero
