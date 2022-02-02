import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const FullyLoaded = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 2)
  const {scrollYProgress} = useViewportScroll()

  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    ['20%', '-100%'],
  )

  return (
    <section
      ref={refSection}
      className="min-h-screen py-12 bg-slate-100 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row">
          <div className="relative flex flex-col items-end md:w-1/2 md:pr-20 shrink-0 pt-[600px]">
            <div className="absolute top-0 left-0">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none whitespace-nowrap">
                Fully loaded with
                <br />
                Jamie’s top tips.
              </h2>
              <p className="mt-4 md:mt-8 md:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal md:max-w-xl xl:max-w-3xl">
                Sometimes you need that little bit more. Jamie runs through the
                most common problems with each technique to help you NAIL your
                surfing goals.
              </p>
            </div>
            <motion.div>
              <div className="w-64 2xl:w-[400px] relative">
                <div
                  className="absolute overflow-hidden inset-1 md:inset-2 rounded-[30px] md:rounded-[10%] xl:inset-3 2xl:inset-4 lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px]"
                  style={{transform: 'translateZ(0)'}}
                >
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
                <Image
                  src="/images/iphone-frame-portrait.png"
                  width={580}
                  height={1171}
                  alt="Ask Jamie"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col pt-64 space-y-36 md:w-1/2 md:pl-20 shrink-0">
            <motion.div>
              <div className="w-64 2xl:w-[400px] relative">
                <div
                  className="absolute overflow-hidden inset-1 md:inset-2 rounded-[30px] md:rounded-[10%] xl:inset-3 2xl:inset-4 lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px]"
                  style={{transform: 'translateZ(0)'}}
                >
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
                <Image
                  src="/images/iphone-frame-portrait.png"
                  width={580}
                  height={1171}
                  alt="Ask Jamie"
                />
              </div>
            </motion.div>
            <motion.div>
              <div className="w-64 2xl:w-[400px] relative">
                <div
                  className="absolute overflow-hidden inset-1 md:inset-2 rounded-[30px] md:rounded-[10%] xl:inset-3 2xl:inset-4 lg:rounded-[25px] xl:rounded-[30px] 2xl:rounded-[40px]"
                  style={{transform: 'translateZ(0)'}}
                >
                  <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/e6a22efa-526b-468f-a6e8-172f3901c6cf/e6a22efa-526b-468f-a6e8-172f3901.ism/manifest(format=m3u8-aapl).m3u8" />
                </div>
                <Image
                  src="/images/iphone-frame-portrait.png"
                  width={580}
                  height={1171}
                  alt="Ask Jamie"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FullyLoaded
