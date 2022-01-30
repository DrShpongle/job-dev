import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useWindowSize, useMeasure} from 'react-use'
import {isBrowser} from 'utils/isBrowser'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import {useRefScrollText} from 'hooks/useRefScrollText'
import VideoEmbed from 'components/video-embed'

const textVariants = {
  nonActive: {
    opacity: 0.2,
  },
  active: {
    opacity: 1,
  },
}

const TextItem: React.FC<{text: string}> = ({text}) => {
  const refText = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollText(refText)
  const {scrollYProgress} = useViewportScroll()

  const textOpacity = useTransform(
    scrollYProgress,
    // [start, (start + end) * 0.4, (start + end) / 2, (start + end) * 0.6, end],
    // [0.05, 0.1, 1, 0.1, 0.05],
    [start, (start + end) / 2, end],
    [0.5, 1, 0.5],
  )

  // const testHandler = () => {
  //   const rect = refText.current.getBoundingClientRect()
  //   console.log('rectTop', rect.top)
  //   console.log('window scroll', document.documentElement.scrollTop)
  // }

  // React.useEffect(() => {
  //   window.addEventListener('scroll', testHandler)
  // })

  return (
    <motion.div
      ref={refText}
      // variants={textVariants}
      // initial="nonActive"
      // animate="nonActive"
      className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none text-white font-headings duration-200"
      style={{opacity: textOpacity}}
    >
      {text}
    </motion.div>
  )
}

const HeroWithScrollableText = () => {
  const refSection = React.useRef<HTMLDivElement>(null)
  const refTextHolder = React.useRef<HTMLDivElement>(null)

  const {height: windowHeight} = useWindowSize()
  const [textBlockRef, {height: textBlockHeight}] = useMeasure()

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  // TODO: Warning: Prop `style` did not match.
  const scaleText = useTransform(
    scrollYProgress,
    [start, end],
    [textBlockHeight, -windowHeight],
  )

  return (
    <section ref={refSection} className="sticky top-0 h-screen overflow-hidden">
      <div className="absolute inset-0 before:absolute before:bg-black/40 before:inset-0">
        <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/45f6339a-4429-44d6-a297-ef025d31558b/45f6339a-4429-44d6-a297-ef025d31.ism/manifest(format=m3u8-aapl).m3u8" />
      </div>
      <motion.div
        ref={refTextHolder}
        className="absolute bottom-0 z-10"
        style={{y: scaleText}}
      >
        <div ref={textBlockRef} className="container space-y-24 bg-red-500/20">
          {textArray.map((item, i) => {
            return <TextItem key={i} text={item} />
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default HeroWithScrollableText

const textArray = [
  'Imagine if you could get 5 minutes with one of the best surfers of all time. Now you can.',
  'You want to get spat out of a monster barrel and have everyone on the beach Scream? Jamie’s got you.',
  'Or how about learning how to do a perfect bottom turn? Just grab your phone and get an instant answer on how to improve. Let’s GO!',
  'Imagine if you could get 5 minutes with one of the best surfers of all time. Now you can.',
  'You want to get spat out of a monster barrel and have everyone on the beach Scream? Jamie’s got you.',
  'Or how about learning how to do a perfect bottom turn? Just grab your phone and get an instant answer on how to improve. Let’s GO!',
]
