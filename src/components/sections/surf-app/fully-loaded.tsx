import * as React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

import VideoPlayer from 'components/video-player'

const MotionItem: React.FC<{url: string}> = ({url}) => {
  const [ref, inView] = useInView({
    threshold: 0.35,
  })
  return (
    <motion.div
      ref={ref}
      transition={{type: 'spring'}}
      variants={{
        hidden: {
          scale: 0,
        },
        shown: {
          scale: 1,
        },
      }}
      initial="hidden"
      animate={inView ? 'shown' : 'hidden'}
    >
      <div className="relative md:w-[36rem] lg:w-[38rem] xl:w-[44rem] 2xl:w-[54rem] portrait:w-64 md:portrait:w-[36rem] lg:portrait:w-[38rem] xl:portrait:w-[44rem] 2xl:portrait:w-[54rem] landscape:w-[24rem] md:landscape:w-[36rem] lg:landscape:w-[38rem] xl:landscape:w-[44rem] 2xl:landscape:w-[54rem]">
        <div className="border-radius-fix absolute inset-2 overflow-hidden rounded-[30px] md:inset-3 xl:rounded-[40px] 2xl:rounded-[50px]">
          <VideoPlayer playing={true} url={url} controls={true} muted={true} />
        </div>
        <div className="pointer-events-none portrait:hidden md:portrait:block">
          <Image
            src="/images/iphone-frame-landscape.png"
            width={1171}
            height={580}
            alt="Ask Jamie"
            priority
          />
        </div>
        <div className="pointer-events-none md:hidden landscape:hidden">
          <Image
            src="/images/iphone-frame-portrait.png"
            width={580}
            height={1171}
            alt="Ask Jamie"
            priority
          />
        </div>
      </div>
    </motion.div>
  )
}

const FullyLoaded = ({blok}: any) => {
  console.log('blok:', blok)
  return (
    <section
      className="min-h-screen py-12 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h2 className="max-w-3xl text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {blok.title}
        </h2>
      </div>
      <div className="container mt-8 space-y-12 md:mt-12 md:space-y-16 lg:mt-16 xl:space-y-20 2xl:space-y-24">
        <div className="flex flex-col items-center space-y-8 md:space-y-16 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-16">
          <p className="2xl:leading shrink bg-blend-normal md:text-2xl lg:max-w-xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:text-[34px]">
            {blok.description}
          </p>
          {blok?.tip_video_url_1 && <MotionItem url={blok.tip_video_url_1} />}
        </div>
        {blok?.tip_video_url_2 && (
          <div className="flex justify-center lg:justify-start">
            <MotionItem url={blok.tip_video_url_2} />
          </div>
        )}
        {blok?.tip_video_url_3 && (
          <div className="flex justify-center lg:justify-start">
            <MotionItem url={blok.tip_video_url_3} />
          </div>
        )}
      </div>
    </section>
  )
}

export default FullyLoaded
