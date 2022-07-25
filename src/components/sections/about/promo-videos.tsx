import * as React from 'react'
import VideoEmbed from 'components/video-embed'
import {render} from 'storyblok-rich-text-react-renderer'

const PromoVideos = ({blok}: any) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <section
      className="bg-white py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
          {blok.title}
        </h3>
        <h2 className="mt-1 text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {blok.subtitle}
        </h2>
        <div className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
          {render(blok.text)}
        </div>
        <div className="mt-8 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:gap-10 xl:mt-20 xl:gap-12 2xl:mt-24 2xl:gap-16">
          <div className="aspect-square">
            {isMounted && <VideoEmbed url={blok.video_left.url} />}
          </div>
          <div className="aspect-square">
            {isMounted && <VideoEmbed url={blok.video_right.url} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoVideos
