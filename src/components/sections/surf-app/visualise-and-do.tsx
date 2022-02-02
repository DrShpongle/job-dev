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
      className="sticky top-0 h-screen pt-16 pb-5 overflow-hidden bg-white md:pb-8 2xl:pb-10 md:pt-20 lg:pt-20 xl:pt-24"
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
              <div className="grid w-full h-full md:grid-cols-2">
                <div className="relative h-full bg-teal-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e703b314-1fbc-40c8-8055-e7bc86a78436/e703b314-1fbc-40c8-8055-e7bc86a7.ism/manifest(format=m3u8-aapl).m3u8" />
                  <h3 className="absolute left-0 z-10 w-full text-5xl leading-none text-center text-white bottom-10 md:text-5xl lg:text-6xl xl:text-7xl">
                    Bottom turn
                  </h3>
                </div>
                <div className="relative h-full bg-purple-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
                  <h3 className="absolute left-0 z-10 w-full text-5xl leading-none text-center text-white bottom-10 md:text-5xl lg:text-6xl xl:text-7xl">
                    Top turn
                  </h3>
                </div>
              </div>
            </div>
            <motion.div
              className="relative z-10 w-full h-full"
              style={{y: scrollText}}
            >
              <div className="grid w-full h-full md:grid-cols-2">
                <div className="relative h-full bg-green-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/a095e6ac-0c83-4146-88d8-94305d057bd6/a095e6ac-0c83-4146-88d8-94305d05.ism/manifest(format=m3u8-aapl).m3u8" />
                  <h3 className="absolute left-0 z-10 w-full text-5xl leading-none text-center text-white bottom-10 md:text-5xl lg:text-6xl xl:text-7xl">
                    Cut back
                  </h3>
                </div>
                <div className="relative h-full bg-orange-500">
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e703b314-1fbc-40c8-8055-e7bc86a78436/e703b314-1fbc-40c8-8055-e7bc86a7.ism/manifest(format=m3u8-aapl).m3u8" />
                  <h3 className="absolute left-0 z-10 w-full text-5xl leading-none text-center text-white bottom-10 md:text-5xl lg:text-6xl xl:text-7xl">
                    Backside barrel
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisualiseAndDo
