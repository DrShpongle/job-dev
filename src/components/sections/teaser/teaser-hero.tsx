import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useAnimation,
} from 'framer-motion'

import VideoPlayer from 'components/video-player'

const TeaserHero: React.FC<any> = ({blok}) => {
  const refSection = React.useRef<HTMLDivElement>(null)
  const controlsPhone = useAnimation()
  
  return (
    <section className="pt-36" style={{transform: 'translateZ(0)'}}>
      <div className="absolute inset-0 z-[-1] h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/teaser-waves.jpg"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            priority
          />
        </div>
      </div>
      <div className="text-center">
        <h2 className="px-4 text-white text-7xl">Psyched for the Release?</h2>
        <p className="px-4 text-2xl text-white pt-4">We&apos;re loading up the app with Jamie&apos;s radest videos and tutorials.</p>
        <p className="px-4 text-2xl text-white">Sign up below and we&apos;ll let you know the second it hits the app store.</p>
      </div>
      <div className="flex h-full w-full items-center justify-center pt-8">
        <div
          className="md:w-[36rem] lg:w-[38rem] xl:w-[44rem] 2xl:w-[54rem] landscape:w-[24rem] md:landscape:w-[36rem] lg:landscape:w-[38rem] xl:landscape:w-[44rem] 2xl:landscape:w-[54rem]"
          style={{transform: 'translateZ(0)'}}
        >
          <div className="absolute w-full h-full pt-2 pr-4 pb-4">
            <div className="w-full h-full overflow-hidden rounded-[75px]">
              <VideoPlayer
                playing={true}
                url="https://mytwyn-global.akamaized.net/877053fb-0352-40e7-a327-bb6563bcde36/877053fb-0352-40e7-a327-bb6563bc.ism/manifest(format=m3u8-aapl).m3u8" 
                controls={true}
                muted={false}
                externalControls={false}
              />
            </div>
          </div>
          <Image
            src="/images/iphone-frame-landscape.png"
            width={1171}
            height={580}
            alt="Ask Jamie"
            priority
           />
        </div>
      </div>
      <div className="text-center">
        <h4 className="px-4 text-2xl text-white pt-12 pb-8">Scroll down to register for the sickest surf app</h4>
      </div>
    </section>
  )
}

export default TeaserHero
