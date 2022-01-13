import React, {WheelEvent} from 'react'
import classNames from 'classnames'

import VideoEmbed from 'components/video-embed'

const ScrollableHero: React.FC = () => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(33)

  const handlerChangeWidth = (e: WheelEvent<HTMLDivElement>) => {
    let scale = currentWidth
    scale += e.deltaY * 0.1
    scale = Math.min(Math.max(33, scale), 100)
    setCurrentWidth(scale)
  }

  let clientY: number = 0

  React.useEffect(() => {
    document.body.style.position = 'fixed'
    if (currentWidth === 100) {
      document.body.style.position = ''
    }
    return () => {
      document.body.style.position = ''
    }
  }, [currentWidth])

  return (
    <>
      <style jsx>
        {`
          .full-screen-height {
            height: calc(var(--real100vh) - 80px);
          }
        `}
      </style>
      <div
        className={classNames(
          'relative flex justify-center w-full overflow-hidden flex-nowrap full-screen-height',
          currentWidth < 100 && 'touch-none',
        )}
        onWheel={handlerChangeWidth}
        onTouchStart={(e) => {
          clientY = e.touches[0].clientY
        }}
        onTouchEnd={(e) => {
          const deltaY = e.changedTouches[0].clientY - clientY
          let scale = currentWidth
          scale += deltaY * -0.1
          let computedScale = Math.min(Math.max(33, scale), 100)
          setCurrentWidth(computedScale)
        }}
      >
        <div className="relative w-1/2 h-full overflow-hidden shrink-0">
          <VideoEmbed
            src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
            className="absolute left-0 object-center"
          />
        </div>
        <div
          className="absolute top-0 z-10 flex justify-center w-1/3 h-full overflow-hidden"
          style={{width: `${currentWidth}%`}}
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
        <div className="relative w-1/2 h-full overflow-hidden shrink-0">
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
      </div>
    </>
  )
}

export default ScrollableHero
