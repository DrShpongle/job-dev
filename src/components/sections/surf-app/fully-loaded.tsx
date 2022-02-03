import * as React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

import VideoEmbed from 'components/video-embed'

const MotionItem: React.FC<{url: string}> = ({url}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
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
      <div className="relative w-64 2xl:w-[400px]">
        <div
          className="absolute inset-1 overflow-hidden rounded-[30px] md:inset-2 md:rounded-[10%] lg:rounded-[25px] xl:inset-3 xl:rounded-[30px] 2xl:inset-4 2xl:rounded-[40px]"
          style={{transform: 'translateZ(0)'}}
        >
          <VideoEmbed url={url} />
        </div>
        <Image
          src="/images/iphone-frame-portrait.png"
          width={580}
          height={1171}
          alt="Ask Jamie"
        />
      </div>
    </motion.div>
  )
}

const FullyLoaded = () => {
  return (
    <section
      className="min-h-screen bg-slate-100 py-12 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <h2 className="whitespace-nowrap text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          Fully loaded with
          <br />
          Jamie’s top tips.
        </h2>
      </div>
      <div className="container mt-4 md:mt-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex shrink-0 flex-col items-end md:w-1/2 md:pr-10">
            <p className="md:max-w-xl md:text-2xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:mb-64 2xl:text-[34px] 2xl:leading-normal">
              Sometimes you need that little bit more. Jamie runs through the
              most common problems with each technique to help you NAIL your
              surfing goals.
            </p>
            <MotionItem url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
          <div className="flex shrink-0 flex-col space-y-20 md:w-1/2 md:pl-10">
            <MotionItem url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8" />
            <MotionItem url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullyLoaded
