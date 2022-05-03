import * as React from 'react'
import {motion, useViewportScroll, useTransform} from 'framer-motion'
import {sbEditable} from '@storyblok/storyblok-editable'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const VisualiseAndDo = ({blok}: any) => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  const scrollText = useTransform(scrollYProgress, [start, end], ['100%', '0%'])

  return (
    <section
      ref={refSection}
      {...sbEditable(blok)}
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden bg-white"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="absolute left-0 top-0 h-full w-full">
          <VideoEmbed url={blok.bg_video_url.url} />
        </div>
        <motion.div
          className="flex h-full w-full flex-col justify-center will-change-transform"
          style={{y: scrollText}}
        >
          <div className="container flex flex-col items-end text-right text-white">
            <div className="max-w-3xl font-headings text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
              {blok.title}
            </div>
            <p className="mt-4 md:mt-8 md:max-w-xl md:text-2xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
              {blok.description}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-[150vh]" />
    </section>
  )
}

export default VisualiseAndDo
