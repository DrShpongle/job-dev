import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {sbEditable} from '@storyblok/storyblok-editable'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const NewContent = ({blok}: any) => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()

  const fadeInImages = useTransform(scrollYProgress, [start, end], [0, 1])

  const controlsFadeInImage01 = useAnimation()
  const controlsFadeInImage02 = useAnimation()
  const controlsFadeInImage03 = useAnimation()
  const controlsFadeInImage04 = useAnimation()
  const controlsFadeInImage05 = useAnimation()
  const controlsFadeInImage06 = useAnimation()

  React.useEffect(() => {
    const triggerLogoAnimation = () => {
      if (fadeInImages.get() > 0) {
        controlsFadeInImage01.start('shown')
      } else {
        controlsFadeInImage01.start('hidden')
      }
      if (fadeInImages.get() > 0.15) {
        controlsFadeInImage05.start('shown')
      } else {
        controlsFadeInImage05.start('hidden')
      }
      if (fadeInImages.get() > 0.3) {
        controlsFadeInImage04.start('shown')
      } else {
        controlsFadeInImage04.start('hidden')
      }
      if (fadeInImages.get() > 0.45) {
        controlsFadeInImage02.start('shown')
      } else {
        controlsFadeInImage02.start('hidden')
      }
      if (fadeInImages.get() > 0.6) {
        controlsFadeInImage06.start('shown')
      } else {
        controlsFadeInImage06.start('hidden')
      }
      if (fadeInImages.get() > 0.75) {
        controlsFadeInImage03.start('shown')
      } else {
        controlsFadeInImage03.start('hidden')
      }
    }
    const unsubscribeY = fadeInImages.onChange(triggerLogoAnimation)
    return () => {
      unsubscribeY()
    }
  })

  const variantsFadeinImages = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    shown: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  return (
    <section ref={refSection} {...sbEditable(blok)} key={blok._uid}>
      <div
        className="sticky top-0 h-screen overflow-hidden bg-[#203B74]"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="absolute z-10 h-full w-full bg-[#203B74] opacity-40" />
        <div className="relative flex h-full w-full flex-col">
          <div className="relative z-10 flex shrink-0 items-center pt-20 pb-8 text-center md:h-full md:w-full">
            <div className="w-full overflow-hidden text-white">
              <div className="container flex flex-col items-center">
                <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
                  {blok.title}
                </h2>
                <div className="mt-4 max-w-xl md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:max-w-4xl 2xl:text-[34px] 2xl:leading-normal">
                  {blok.description}
                </div>
              </div>
            </div>
          </div>
          <div className="relative grow md:absolute md:inset-0">
            <motion.div
              variants={variantsFadeinImages}
              animate={controlsFadeInImage01}
              className="absolute left-4 top-8 z-[1] flex w-[154px] will-change-transform md:left-0 md:top-20 md:w-[438px] lg:top-24"
            >
              <Image
                src={blok.image_01.filename}
                width={876}
                height={546}
                alt="image 01"
              />
            </motion.div>
            <motion.div
              variants={variantsFadeinImages}
              animate={controlsFadeInImage02}
              className="absolute right-0 z-[2] flex w-[154px] will-change-transform md:top-14 md:w-[390px] lg:top-20  lg:w-[542px]"
            >
              <Image
                src={blok.image_02.filename}
                width={1084}
                height={664}
                alt="image 02"
              />
            </motion.div>
            <motion.div
              variants={variantsFadeinImages}
              animate={controlsFadeInImage03}
              className="absolute inset-0 z-[6] m-auto flex h-1 w-[919px] max-w-[75%] items-center will-change-transform"
            >
              <div className="relative">
                <Image
                  src={blok.image_03.filename}
                  width={1838}
                  height={1050}
                  alt="image 03"
                />
              </div>
            </motion.div>
            <motion.div
              variants={variantsFadeinImages}
              animate={controlsFadeInImage04}
              className="absolute bottom-8 left-8 z-[3] flex w-[110px] will-change-transform md:bottom-20 md:left-6 md:w-[295px] lg:left-8"
            >
              <Image
                src={blok.image_04.filename}
                width={590}
                height={590}
                alt="image 04"
              />
            </motion.div>
            <motion.div
              variants={variantsFadeinImages}
              animate={controlsFadeInImage05}
              className="absolute bottom-16 right-4 z-[4] flex w-[110px] will-change-transform md:bottom-16 md:right-6 md:w-[300px] lg:right-8 lg:w-[362px]"
            >
              <Image
                src={blok.image_05.filename}
                width={724}
                height={980}
                alt="image 05"
              />
            </motion.div>
            <motion.div
              variants={variantsFadeinImages}
              animate={controlsFadeInImage06}
              className="absolute bottom-0 left-24 z-[5] flex w-[160px] will-change-transform md:left-64 md:w-[430px] lg:w-[502px]"
            >
              <Image
                src={blok.image_06.filename}
                width={1004}
                height={352}
                alt="image 06"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[300vh]" />
    </section>
  )
}

export default NewContent
