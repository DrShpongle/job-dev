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
        <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal xl:max-w-4xl 2xl:max-w-5xl">
          If you’ve always wanted to ask JOB a question, this is for you.
          Whether it’s how to stay so focused, overcome bad habits or what do I
          need to do to create loads of spray with my top turn? ASK AWAY. You
          literally have Jamie in your pocket!
        </p>
        <div className="relative flex flex-col items-center pb-16 mt-8 md:block md:mt-10 xl:pl-20 md:pb-16 lg:pb-14 xl:pb-16 2xl:pb-20 lg:mt-12 xl:mt-16">
          <div className="hidden md:block w-[80%] xl:w-[996px] 2xl:w-[1220px] mt-6 xl:mt-0">
            <Image
              src="/images/ask-jamie.jpg"
              width={1220}
              height={674}
              alt="Ask Jamie"
              layout="responsive"
            />
          </div>
          <div className="w-[220px] md:w-[200px] lg:w-[250px] xl:w-[280px] 2xl:w-[340px] relative md:absolute md:right-0 md:bottom-0 flex">
            <Image
              src="/images/iphone-frame-portrait.png"
              width={580}
              height={1171}
              alt="Ask Jamie"
              className="relative z-10"
            />
            <div
              className="absolute overflow-hidden inset-1 md:inset-2 rounded-[30px] md:rounded-[10%] xl:inset-3 2xl:inset-4 lg:rounded-[15%] 2xl:rounded-[40px]"
              style={{transform: 'translateZ(0)'}}
            >
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
