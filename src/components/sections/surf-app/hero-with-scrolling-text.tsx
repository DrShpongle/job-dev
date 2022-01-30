import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useWindowSize, useMeasure} from 'react-use'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const TextItem: React.FC<{text: string}> = ({text}) => {
  const refText = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(false)

  const scrollHandler = () => {
    const rect = refText.current?.getBoundingClientRect()
    const point = window.innerHeight / 2
    if (rect?.top && rect?.bottom) {
      setActive(rect.top < point && rect.bottom > point)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
  })

  return (
    <motion.div
      ref={refText}
      variants={{
        nonActive: {
          opacity: 0.15,
        },
        active: {
          opacity: 1,
        },
      }}
      animate={active ? 'active' : 'nonActive'}
      className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none text-white font-headings duration-300 py-6 md:py-8 first:pt-0 last:pb-0 opacity-0"
    >
      {text}
    </motion.div>
  )
}

const HeroWithScrollableText = () => {
  const refSection = React.useRef<HTMLDivElement>(null)
  const refTextHolder = React.useRef<HTMLDivElement>(null)

  const {height: windowHeight} = useWindowSize()
  const [textBlockRef, {height: textBlockHeight}] = useMeasure<any>()

  const {start, end} = useRefScrollProgress(refSection, 2)
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
        className="absolute bottom-0 z-10 w-full duration-200 will-change-transform"
        initial={{y: textBlockHeight}}
        style={{y: scaleText}}
      >
        <div ref={textBlockRef} className="container">
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
]
