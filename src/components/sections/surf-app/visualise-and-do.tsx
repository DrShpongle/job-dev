import * as React from 'react'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const VisualiseAndDo = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 1.5)
  const {scrollYProgress} = useViewportScroll()

  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    ['50%', '-100%'],
  )

  return (
    <section
      ref={refSection}
      className="sticky top-0 h-screen py-12 overflow-hidden bg-white xl:py-16"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container flex flex-col h-full">
        <div className="mb-12 shrink-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
            Visualise and do
          </h2>
          <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal xl:max-w-4xl 2xl:max-w-5xl">
            Jamie improved by watching clips of his favourite surfers over and
            over and over again. The JOB Surf app has technique specific clip
            rolls. You want to watch Jamie land his signature backside barrels
            on repeat so YOU can replicate? We have got you covered!
          </p>
        </div>
        <div className="relative overflow-hidden grow">
          <div className="absolute inset-0">
            <div className="w-full h-full">
              <div className="grid w-full h-full grid-cols-2">
                <div className="bg-magenta-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e703b314-1fbc-40c8-8055-e7bc86a78436/e703b314-1fbc-40c8-8055-e7bc86a7.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
                <div className="bg-pink-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
              </div>
            </div>
            <motion.div className="z-10 w-full h-full" style={{y: scrollText}}>
              <div className="grid w-full h-full grid-cols-2">
                <div className="bg-magenta-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
                <div className="bg-pink-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e703b314-1fbc-40c8-8055-e7bc86a78436/e703b314-1fbc-40c8-8055-e7bc86a7.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <motion.div
        className="absolute bottom-0 z-10 w-full"
        style={{y: scrollText}}
      >
        <div className="container flex flex-col justify-end">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
            Learn from
            <br className="block md:hidden" /> the
            <br className="hidden md:block" /> best
            <br className="block md:hidden" /> not the
            <br /> lineup
            <br className="block md:hidden" /> kook
          </h2>
          <p className="mt-4 md:mt-8 md:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal md:max-w-xl xl:max-w-3xl text-white">
            When it comes to surfers, everyone loves to play the guru. We all
            get advice in the line up, but how do we know what actually works?
            Get yourself a PROVEN PRO to give you advice in the line up. Start
            improving your bottom turn so you can actually smash the lip, or,
            what about creating so much spray it looks like this:{' '}
          </p>
        </div>
      </motion.div> */}
    </section>
  )
}

export default VisualiseAndDo
