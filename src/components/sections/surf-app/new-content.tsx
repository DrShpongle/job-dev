import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const NewContent = () => {
  const refSection = React.useRef<HTMLDivElement>(null)

  const {start, end} = useRefScrollProgress(refSection, 2)
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
      if (fadeInImages.get() > 0.15) {
        controlsFadeInImage01.start('shown')
      } else {
        controlsFadeInImage01.start('hidden')
      }
      if (fadeInImages.get() > 0.3) {
        controlsFadeInImage05.start('shown')
      } else {
        controlsFadeInImage05.start('hidden')
      }
      if (fadeInImages.get() > 0.45) {
        controlsFadeInImage04.start('shown')
      } else {
        controlsFadeInImage04.start('hidden')
      }
      if (fadeInImages.get() > 0.6) {
        controlsFadeInImage02.start('shown')
      } else {
        controlsFadeInImage02.start('hidden')
      }
      if (fadeInImages.get() > 0.75) {
        controlsFadeInImage06.start('shown')
      } else {
        controlsFadeInImage06.start('hidden')
      }
      if (fadeInImages.get() > 0.9) {
        controlsFadeInImage03.start('shown')
      } else {
        controlsFadeInImage03.start('hidden')
      }
    }
    const unsubscribeY = fadeInImages.onChange(triggerLogoAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  const variantsFadeinImages = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      transition: {
        duration: 0.1,
      },
    },
    shown: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        // type: 'spring',
        // damping: 10,
        // mass: 0.75,
        // stiffness: 100,
      },
    },
  }

  return (
    <section
      ref={refSection}
      className="learn-from-the-best sticky top-0 h-screen overflow-hidden bg-[#203B74]"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="absolute z-10 h-full w-full bg-[#203B74] opacity-40" />
      <motion.div
        variants={variantsFadeinImages}
        animate={controlsFadeInImage01}
        className="absolute left-0 top-24 z-[1] flex w-[438px] duration-200 will-change-transform"
      >
        <Image src="/images/new-content/01.jpg" width={438} height={273} />
      </motion.div>
      <motion.div
        variants={variantsFadeinImages}
        animate={controlsFadeInImage02}
        className="absolute right-0 top-20 z-[2] flex w-[542px]"
      >
        <Image src="/images/new-content/02.jpg" width={542} height={332} />
      </motion.div>
      <motion.div
        variants={variantsFadeinImages}
        animate={controlsFadeInImage03}
        className="absolute inset-0 z-[6] m-auto flex h-1 w-[919px] max-w-[50%] items-center"
      >
        <div className="relative">
          <Image src="/images/new-content/03.jpg" width={919} height={525} />
        </div>
      </motion.div>
      <motion.div
        variants={variantsFadeinImages}
        animate={controlsFadeInImage04}
        className="absolute left-8 bottom-20 z-[3] flex w-[295px]"
      >
        <Image src="/images/new-content/04.jpg" width={295} height={295} />
      </motion.div>
      <motion.div
        variants={variantsFadeinImages}
        animate={controlsFadeInImage05}
        className="absolute right-8 bottom-16 z-[4] flex w-[362px]"
      >
        <Image src="/images/new-content/05.jpg" width={362} height={490} />
      </motion.div>
      <motion.div
        variants={variantsFadeinImages}
        animate={controlsFadeInImage06}
        className="absolute bottom-0 left-64 z-[5] flex w-[502px]"
      >
        <Image src="/images/new-content/06.jpg" width={502} height={176} />
      </motion.div>

      {/* <motion.div
        className="absolute bottom-0 z-10 flex h-full w-full flex-col justify-end"
        style={{y: scrollText}}
      >
        <div className="container">
          <h2 className="text-5xl leading-none text-white md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            Learn from
            <br className="block md:hidden" /> the
            <br className="hidden md:block" /> best
            <br className="block md:hidden" /> not the
            <br /> lineup
            <br className="block md:hidden" /> kook
          </h2>
          <p className="mt-4 text-white md:mt-8 md:max-w-xl md:text-2xl lg:leading-normal xl:max-w-3xl xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
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

export default NewContent
