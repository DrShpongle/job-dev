import * as React from 'react'
import VideoEmbed from 'components/video-embed'

const PromoVideos = () => {
  return (
    <section
      className="bg-white py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
          Get Psyched
        </h3>
        <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          sus quia quis doluptio
        </h2>
        <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
          Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
          nonsedit, utestiam, sus quia quis doluptio illatem et aut optat quam
          nam nimagnis doloreh enistorro vendis voluptaqua.
          <br />
          <br />
          Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
          nonsedit, utestiam, sus quia quis doluptio illatem et aut optat quam
          nam nimagnis doloreh enistorro vendis voluptaqua.
        </p>
        <div className="mt-8 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:gap-10 xl:mt-20 xl:gap-12 2xl:mt-24 2xl:gap-16">
          <div className="aspect-square">
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/1681c7f2-28e8-4a8b-944a-ed0b4de89588/1681c7f2-28e8-4a8b-944a-ed0b4de8.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
          <div className="aspect-square">
            <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/c65b0ddb-9bf4-4941-965f-f5bcfa86cc7b/c65b0ddb-9bf4-4941-965f-f5bcfa86.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoVideos
