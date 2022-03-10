import * as React from 'react'
import Image from 'next/image'
import {motion, useAnimation} from 'framer-motion'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        <h2 className="px-4 text-7xl text-white">Psyched for the Release?</h2>
        <p className="px-4 pt-4 text-2xl text-white">
	  I&apos;ve been busy creating an app that shares so much of what
          I&apos;ve learnt over the last 30 years.
        </p>
        <p className="px-4 text-2xl text-white">
          Sign up below and we&apos;ll let you know the second it hits the app
          store.
        </p>
      </div>
      <div className="flex h-full w-full items-center justify-center pt-8">
        <div
          className="w-80 md:w-[36rem] lg:w-[38rem] xl:w-[44rem] 2xl:w-[54rem] landscape:w-[24rem] md:landscape:w-[36rem] lg:landscape:w-[38rem] xl:landscape:w-[44rem] 2xl:landscape:w-[54rem]"
          style={{transform: 'translateZ(0)'}}
        >
          <div className="absolute h-full w-full pt-2 pb-4 md:pr-4">
            <div className="h-full w-full overflow-hidden rounded-[30px] md:rounded-[40px] xl:rounded-[60px] 2xl:rounded-[75px]">
              <VideoPlayer
                playing={true}
                url="https://mytwyn-global.akamaized.net/877053fb-0352-40e7-a327-bb6563bcde36/877053fb-0352-40e7-a327-bb6563bc.ism/manifest(format=m3u8-aapl).m3u8"
                controls={true}
                muted={true}
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
        <h4 className="px-4 pt-12 pb-4 text-2xl text-white">
          Scroll down to pre-register
        </h4>
      </div>
      <div className="text-center">
        <h4 className="pb-8 text-2xl text-white">
          <ExpandMoreIcon fontSize="large" />
        </h4>
      </div>
    </section>
  )
}

export default TeaserHero
