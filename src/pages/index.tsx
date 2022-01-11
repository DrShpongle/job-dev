import React, {WheelEvent} from 'react'
import type {NextPage} from 'next'
import PageLayout from 'components/layouts/page-layout'

import VideoEmbed from 'components/video-embed'

const Home: NextPage = () => {
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
    <PageLayout>
      <div className="max-w-[1980px] mx-auto">
        <div
          className="relative flex justify-center w-full flex-nowrap touch-none full-screen-height"
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
            <div className="absolute flex flex-col text-white text-xl bottom-0 space-y-4 items-center">
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
        </div>
        <h1 className="my-48 text-6xl text-center">Some content below</h1>
      </div>
    </PageLayout>
  )
}

export default Home
