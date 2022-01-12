import React, {WheelEvent} from 'react'

import VideoEmbed from 'components/video-embed'

const ScrollableHero: React.FC = () => {
  const [currentWidth, setCurrentWidth] = React.useState<number>(33)
  const changeWidth = (event: WheelEvent<HTMLDivElement>) => {
    // event.preventDefault()
    // window.addEventListener('wheel', {passive: false})

    let scale = currentWidth

    scale += event.deltaY * 0.1

    // Restrict scale
    scale = Math.min(Math.max(33, scale), 100)

    // Apply scale transform
    // el.style.transform = `scale(${scale})`;
    setCurrentWidth(scale)
  }

  React.useEffect(() => {
    document.body.style.position = 'fixed'
    if (currentWidth === 100) {
      document.body.style.position = ''
    }
    return () => {
      document.body.style.position = 'fixed'
    }
  })

  return (
    <>
      <style jsx>
        {`
          .full-screen-height {
            height: calc(100vh - 80px);
          }
        `}
      </style>
      <div
        className="relative flex justify-center w-full overflow-hidden flex-nowrap touch-none full-screen-height"
        onWheel={changeWidth}
        onTouchMove={(e) => console.log('e:', e)}
      >
        <div className="relative w-1/2 overflow-hidden shrink-0">
          <VideoEmbed
            src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4"
            className="absolute left-0"
          />
        </div>
        <div
          className="absolute top-0 z-10 flex justify-center w-1/3 h-full overflow-hidden"
          style={{width: `${currentWidth}%`}}
        >
          <VideoEmbed
            src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_014_preview.mp4"
            className="absolute"
          />
          <div className="absolute bottom-0 flex flex-col items-center space-y-4 text-xl text-white">
            <span>scroll down</span>
            <div className="w-px h-10 bg-white" />
          </div>
        </div>
        <div className="relative w-1/2 overflow-hidden shrink-0">
          <VideoEmbed
            src="https://cdn.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_13B_Bali_1080p_005_preview.mp4"
            className="absolute right-0"
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
