import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
  useSpring,
} from 'framer-motion'
import {useWindowSize, useMeasure} from 'react-use'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const TextItem: React.FC<{text: string}> = ({text}) => {
  const refText = React.useRef<HTMLDivElement>(null)

  const scrollHandler = () => {
    const rect = refText.current?.getBoundingClientRect()
    const point = window.innerHeight / 2
    if (rect && refText?.current) {
      refText.current.style.opacity =
        rect.top < point && rect.bottom > point ? '1' : '0.15'
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      scrollHandler()
    }, 600)
    window.addEventListener('scroll', scrollHandler)
  }, [])

  return (
    <div
      ref={refText}
      className="py-6 font-headings text-5xl leading-none text-white opacity-[0.15] duration-300 first:pt-0 last:pb-0 md:py-8 md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[111px]"
    >
      {text}
    </div>
  )
}

const HeroWithScrollableText = () => {
  const refSection = React.useRef<HTMLDivElement>(null)
  const refTextHolder = React.useRef<HTMLDivElement>(null)

  const {height: windowHeight} = useWindowSize()
  const [textBlockRef, {height: textBlockHeight}] = useMeasure<any>()

  const controlsPhone = useAnimation()

  const {start, end} = useRefScrollProgress(refSection, 2)
  const {scrollYProgress} = useViewportScroll()

  // TODO: Warning: Prop `style` did not match.
  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    [textBlockHeight - windowHeight / 2 - 100, -windowHeight],
  )

  const animateScrollText = useSpring(scrollText, {stiffness: 200, damping: 70})

  React.useEffect(() => {
    const triggerPhoneAnimation = () => {
      if (scrollText.get() < -windowHeight * 0.5) {
        controlsPhone.start('shown')
      } else {
        controlsPhone.start('hidden')
      }
    }
    const unsubscribeY = scrollText.onChange(triggerPhoneAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  return (
    <section ref={refSection} className="sticky top-0 h-screen overflow-hidden">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/40">
        <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/45f6339a-4429-44d6-a297-ef025d31558b/45f6339a-4429-44d6-a297-ef025d31.ism/manifest(format=m3u8-aapl).m3u8" />
      </div>
      <motion.div
        ref={refTextHolder}
        animate={{opacity: 1, transition: {delay: 1}}}
        className="absolute bottom-0 z-10 w-full xl:px-20"
        initial={{y: textBlockHeight, opacity: 0}}
        style={{y: animateScrollText}}
        // style={{y: scrollText}}
      >
        <div ref={textBlockRef} className="container">
          {textArray.map((item, i) => {
            return <TextItem key={i} text={item} />
          })}
        </div>
      </motion.div>
      <div className="flex h-full w-full items-center justify-center pt-20">
        <motion.div
          className="relative z-10"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.5,
            },
            shown: {
              opacity: 1,
              scale: 1,
            },
          }}
          initial="hidden"
          transition={{
            type: 'spring',
            duration: 0.3,
          }}
          animate={controlsPhone}
        >
          <div className="w-64 md:w-[300px]">
            <div
              className="absolute inset-2 overflow-hidden rounded-[30px] md:inset-3"
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
    </section>
  )
}

export default HeroWithScrollableText

const textArray = [
  'Imagine if you could get 5 minutes with one of the best surfers of all time. Now you can.',
  'You want to get spat out of a monster barrel and have everyone on the beach Scream? Jamie’s got you.',
  'Or how about learning how to do a perfect bottom turn? Just grab your phone and get an instant answer on how to improve. Let’s GO!',
]
