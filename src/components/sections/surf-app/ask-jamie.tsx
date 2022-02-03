import * as React from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import Link from 'next/link'

import VideoPlayer from 'components/video-player'
import {IconPlay, IconPause, IconVolumeOn, IconVolumeOff} from 'lib/icons'

const AskJamie = () => {
  const [playing, setPlaying] = React.useState(true)
  const [muted, setMuted] = React.useState(true)
  return (
    <section
      className="min-h-screen bg-white py-12 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          Ask Jamie
        </h2>
        <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
          If you’ve always wanted to ask JOB a question, this is for you.
          Whether it’s how to stay so focused, overcome bad habits or what do I
          need to do to create loads of spray with my top turn? ASK AWAY. You
          literally have Jamie in your pocket!
        </p>
        <div className="relative mt-8 flex flex-col items-center md:mt-10 md:block md:pb-16 lg:mt-12 lg:pb-14 xl:mt-16 xl:pl-20 xl:pb-16 2xl:pb-20">
          <div className="mt-6 hidden w-[80%] md:block xl:mt-0 xl:w-[996px] 2xl:w-[1220px]">
            <Image
              src="/images/ask-jamie.jpg"
              width={1220}
              height={674}
              alt="Ask Jamie"
              layout="responsive"
            />
          </div>
          <div className="relative flex w-[220px] md:absolute md:right-0 md:bottom-0 md:w-[200px] lg:w-[250px] xl:w-[280px] 2xl:w-[340px]">
            <div
              className="absolute inset-1 overflow-hidden rounded-[30px] md:inset-2 md:rounded-[10%] lg:rounded-[25px] xl:inset-3 xl:rounded-[30px] 2xl:inset-4 2xl:rounded-[40px]"
              style={{transform: 'translateZ(0)'}}
            >
              <VideoPlayer
                url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8"
                controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
                externalControls={true}
                playing={playing}
                muted={muted}
              />
            </div>
            <Image
              src="/images/iphone-frame-portrait.png"
              width={580}
              height={1171}
              alt="Ask Jamie"
            />
          </div>
          <div className="z-10 mt-4 flex items-center space-x-2 md:absolute md:bottom-3 md:right-56 md:mt-0 md:space-x-4 lg:bottom-2 lg:right-72 xl:right-80 2xl:right-96">
            <button
              onClick={() => setPlaying(!playing)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black/70 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
            >
              {playing ? (
                <IconPause className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              ) : (
                <IconPlay className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              )}
            </button>
            <button
              onClick={() => setMuted(!muted)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black/70 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
            >
              {muted ? (
                <IconVolumeOff className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              ) : (
                <IconVolumeOn className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AskJamie
