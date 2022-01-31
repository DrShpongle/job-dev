import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import VideoPlayer from 'components/video-player'

const AskJamie = () => {
  return (
    <section className="py-12 bg-white xl:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
          Ask Jamie
        </h2>
        <div className="relative pl-20 xl:pb-12 2xl:pb-16 xl:mt-20 2xl:mt-28">
          <p className="left-0 md:text-xl lg:text-2xl xl:text-2xl lg:leading-normal xl:leading-normal 2xl:text-3xl 2xl:leading-normal max-w-[28rem] 2xl:max-w-[36rem] absolute xl:-top-16 2xl:-top-24 z-10">
            If you’ve always wanted to ask JOB a question, this is for you.
            Whether it’s how to stay so focused, overcome bad habits or what do
            I need to do to create loads of spray with my top turn? ASK AWAY.
            You literally have Jamie in your pocket!
          </p>
          <div className="xl:w-[996px] 2xl:w-[1220px]">
            <Image
              src="/images/lady-asks-jamie.png"
              width={1230}
              height={680}
              alt="Ask Jamie"
              layout="responsive"
            />
          </div>
          <div className="xl:w-[280px] 2xl:w-[340px] absolute right-0 bottom-0">
            <Image
              src="/images/iphone-frame-portrait.png"
              width={580}
              height={1171}
              alt="Ask Jamie"
              className="relative z-10"
            />
            <div className="absolute overflow-hidden inset-4 rounded-[10%]">
              <VideoPlayer
                url="/videos/ask-jamie-test-video.mp4"
                // controls={true}
                controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AskJamie
