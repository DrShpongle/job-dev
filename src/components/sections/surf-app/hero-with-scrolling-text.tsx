import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useMeasure} from 'react-use'
import classNames from 'classnames'

import {isBrowser} from 'utils/is-browser'
import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'
import {throttle} from 'lodash'

const TextItem: React.FC<{text: string; firstItem: boolean}> = ({
  text,
  firstItem,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(false)
  const refText = React.useRef<HTMLDivElement>(null)

  const scrollHandler = React.useCallback(() => {
    const rect = refText.current?.getBoundingClientRect()
    const point = window.innerHeight / 2
    if (rect && refText?.current && rect.top < point && rect.bottom > point) {
      setIsActive(true)
    } else {
      setIsActive((window.scrollY === 0 && firstItem) || false)
    }
  }, [firstItem])

  React.useEffect(() => {
    let scrollHandlerTimeout = setTimeout(scrollHandler, 100)
    const throttledScrollHandler = throttle(scrollHandler, 50)
    window.addEventListener('scroll', throttledScrollHandler)
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
      clearTimeout(scrollHandlerTimeout)
    }
  }, [scrollHandler])

  return (
    <div
      ref={refText}
      className={classNames(
        'py-6 font-headings text-5xl leading-none text-white opacity-[0.15] duration-300 first:pt-0 last:pb-0 md:py-8 md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[111px]',
        isActive ? 'opacity-100' : 'opacity-10',
      )}
    >
      {text}
    </div>
  )
}

const HeroWithScrollableText = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const refSection = React.useRef<HTMLDivElement>(null)
  const refTextHolder = React.useRef<HTMLDivElement>(null)
  const [textBlockRef, {height: textBlockHeight}] = useMeasure<any>()

  const controlsPhone = useAnimation()

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  const windowHeight = (isBrowser && window.innerHeight) || 0

  // TODO: Warning: Prop `style` did not match.
  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    [textBlockHeight - windowHeight / 2 - 100, -windowHeight],
  )

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  useIsomorphicLayoutEffect(() => {
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
    <section ref={refSection}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/40">
          <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/45f6339a-4429-44d6-a297-ef025d31558b/45f6339a-4429-44d6-a297-ef025d31.ism/manifest(format=m3u8-aapl).m3u8" />
        </div>
        {isMounted ? (
          <motion.div
            ref={refTextHolder}
            animate={{opacity: 1, transition: {delay: 1}}}
            className="absolute bottom-0 z-10 w-full xl:px-20"
            initial={{y: textBlockHeight, opacity: 0}}
            style={{y: scrollText}}
          >
            <div ref={textBlockRef} className="container">
              {textArray.map((item, i) => {
                return <TextItem key={i} text={item} firstItem={i === 0} />
              })}
            </div>
          </motion.div>
        ) : null}
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
            <div className="md:w-[36rem] lg:w-[38rem] xl:w-[44rem] 2xl:w-[54rem] portrait:w-64 md:portrait:w-[36rem] lg:portrait:w-[38rem] xl:portrait:w-[44rem] 2xl:portrait:w-[54rem] landscape:w-[24rem] md:landscape:w-[36rem] lg:landscape:w-[38rem] xl:landscape:w-[44rem] 2xl:landscape:w-[54rem]">
              <div
                className="absolute inset-2 overflow-hidden rounded-[30px] md:inset-3 xl:rounded-[40px] 2xl:rounded-[50px]"
                style={{transform: 'translateZ(0)'}}
              >
                <VideoEmbed url="https://mytwynmediaservices-euno.akamaized.net/b94a400b-6229-4117-94cf-99baa15f467a/b94a400b-6229-4117-94cf-99baa15f.ism/manifest(format=m3u8-aapl).m3u8" />
              </div>
              <div className="portrait:hidden md:portrait:block">
                <Image
                  src="/images/iphone-frame-landscape.png"
                  width={1171}
                  height={580}
                  alt="Ask Jamie"
                  priority
                />
              </div>
              <div className="md:hidden landscape:hidden">
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
        </div>
      </div>
      <div className="h-[250vh]" />
    </section>
  )
}

export default HeroWithScrollableText

const textArray = [
  'Imagine if you could get 5 minutes with one of the best surfers of all time. Now you can.',
  'You want to get spat out of a monster barrel and have everyone on the beach Scream? Jamie’s got you.',
  'Or how about learning how to do a perfect bottom turn? Just grab your phone and get an instant answer on how to improve. Let’s GO!',
]
