import * as React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {useMeasure, useWindowSize} from 'react-use'

import {isBrowser} from 'utils/is-browser'
import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'
import VideoPlayer from 'components/video-player'
import ImageWithBlur from 'components/image-with-blur'

const TextItem: React.FC<{text: string}> = ({text}) => {
  return (
    <div className="py-6 font-headings text-5xl leading-none text-white duration-300 first:pt-0 last:pb-0 md:py-8 md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
      {text}
    </div>
  )
}

const HeroWithScrollableText = ({blok}: any) => {
  const {width} = useWindowSize()
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const refSection = React.useRef<HTMLDivElement>(null)
  const refTextHolder = React.useRef<HTMLDivElement>(null)
  const [textBlockRef, {height: textBlockHeight}] = useMeasure<any>()

  const controlsPhone = useAnimation()

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  const windowHeight = (isBrowser && window.innerHeight) || 0

  const scrollText = useTransform(
    scrollYProgress,
    [start, end],
    [textBlockHeight - windowHeight / 2 - 100, -windowHeight],
  )

  const opacityText = useTransform(
    scrollYProgress,
    [start, end * 0.5],
    [1, 0.15],
  )

  const scrollingTextArr = blok.scrollingTextBlock.map((item: any) => {
    return item.text_line
  })

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
    <section
      ref={refSection}
      {...sbEditable(blok)}
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 before:absolute before:inset-0 before:z-10 before:bg-black/20">
          <h1 className="absolute left-0 bottom-0 text-transparent">
            Surf App
          </h1>
          <div className="absolute inset-0">
            <ImageWithBlur
              src={blok.background_image.filename}
              layout="fill"
              objectFit="cover"
              priority
              alt="waves"
            />
          </div>
          <VideoEmbed url={blok.background_video.url} />
        </div>
        {isMounted ? (
          <motion.div
            ref={refTextHolder}
            className="absolute bottom-0 z-10 w-full will-change-transform xl:px-20"
            style={{y: scrollText, opacity: opacityText}}
          >
            <div ref={textBlockRef} className="container">
              {scrollingTextArr.map((item: string, i: number) => {
                return <TextItem key={i} text={item} />
              })}
            </div>
          </motion.div>
        ) : null}
        <div className="flex h-full w-full items-center justify-center pt-20">
          <motion.div
            className="relative z-10 will-change-transform"
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
            <div className="relative md:w-[36rem] lg:w-[38rem] xl:w-[44rem] 2xl:w-[54rem] portrait:w-64 md:portrait:w-[36rem] lg:portrait:w-[38rem] xl:portrait:w-[44rem] 2xl:portrait:w-[54rem] landscape:w-[24rem] md:landscape:w-[36rem] lg:landscape:w-[38rem] xl:landscape:w-[44rem] 2xl:landscape:w-[54rem]">
              <div className="border-radius-fix absolute inset-2 overflow-hidden rounded-[30px] bg-[#3d3d3d] shadow-iphone md:inset-3 xl:rounded-[40px] 2xl:rounded-[50px]">
                <VideoPlayer
                  playing={true}
                  url={
                    isFinite(width) && width < 768
                      ? blok.video_in_the_frame_mobile.url
                      : blok.video_in_the_frame.url
                  }
                  controls={true}
                  muted={true}
                />
              </div>
              <div className="pointer-events-none portrait:hidden md:portrait:block">
                <ImageWithBlur
                  src="/images/iphone-frame-landscape.webp"
                  width={1171}
                  height={580}
                  alt="phone frame"
                  priority
                />
              </div>
              <div className="pointer-events-none md:hidden landscape:hidden">
                <ImageWithBlur
                  src="/images/iphone-frame-portrait.webp"
                  width={580}
                  height={1171}
                  alt="phone frame"
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
