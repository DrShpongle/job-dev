import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'
import {sbEditable} from '@storyblok/storyblok-editable'

import {useIsomorphicLayoutEffect} from 'hooks/useIsomorphicLayoytEffect'
import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoPlayer from 'components/video-player'
import {IconPlay, IconPause, IconVolumeOn, IconVolumeOff} from 'lib/icons'

const AskJamie = ({blok}: any) => {
  const refSection = React.useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = React.useState(true)
  const [muted, setMuted] = React.useState(true)

  const scrollingTextArr = blok.questions_block.map((item: any) => {
    return item.text_line
  })

  const {start, end} = useRefScrollProgress(refSection)
  const {scrollYProgress} = useViewportScroll()
  // const scrollPhone = useTransform(scrollYProgress, [start, end], ['80%', '0%'])
  const controlsText = useAnimation()
  const scrollText = useTransform(
    scrollYProgress,
    [start + (end - start) * 0.7, end],
    [0, 1],
  )

  const scrollPhone = useTransform(
    scrollYProgress,
    [start, start + (end - start) * 0.8],
    ['80%', '0%'],
  )

  useIsomorphicLayoutEffect(() => {
    const triggerPhoneAnimation = () => {
      console.log('scrollText.get():', scrollText.get())
      if (scrollText.get() > 0) {
        controlsText.start('shown')
      } else {
        controlsText.start('hidden')
      }
    }
    const unsubscribeY = scrollText.onChange(triggerPhoneAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  const containerVariants = {
    hidden: {opacity: 0},
    shown: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: {opacity: 0},
    shown: {opacity: 1},
  }

  return (
    <section ref={refSection} {...sbEditable(blok)} key={blok._uid}>
      <div
        className="top-0 flex min-h-screen items-stretch bg-white pt-12 md:sticky xl:pt-24"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <div className="grid h-full gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
                {blok.title}
              </h2>
              <p className="relative z-10 mt-4 md:mt-8 md:max-w-xl md:text-xl lg:max-w-2xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
                {blok.description}
              </p>
              <motion.ul
                className="mt-16 space-y-8 lg:space-y-12"
                variants={containerVariants}
                initial="shown"
                animate={controlsText}
              >
                {scrollingTextArr.map((item: string, index: number) => {
                  return (
                    <motion.li key={index} variants={itemVariants}>
                      <h3 className="text-5xl leading-none text-pink md:text-6xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                        {item}
                      </h3>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>
            <div className="relative flex justify-end">
              <motion.div
                className="relative w-full max-w-[580px]"
                style={{y: scrollPhone}}
                transition={{
                  stiffness: 400,
                  damping: 90,
                }}
              >
                <div className="absolute w-full">
                  <div className="border-radius-fix absolute inset-1 overflow-hidden rounded-[30px] md:inset-2 md:rounded-[30px] lg:rounded-[25px] xl:inset-3 xl:rounded-[30px] 2xl:inset-4 2xl:rounded-[40px]">
                    <VideoPlayer
                      url={blok.video.url}
                      controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
                      externalControls={true}
                      playing={playing}
                      muted={muted}
                    />
                  </div>
                  <div className="pointer-events-none">
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

          {/* <div className="relative mt-14 flex flex-col items-center md:-mt-20 md:pl-8 lg:block xl:pl-20">
            <motion.div
              className="mt-6 hidden w-[80%] md:block md:w-full md:pr-8 lg:pr-0 xl:mt-0 xl:w-[900px] 2xl:w-[1100px]"
              style={{opacity: scrollOpacity}}
            >
              <Image
                src={blok.image.filename}
                width={2420}
                height={1366}
                alt="Ask Jamie"
                layout="responsive"
              />
            </motion.div>
            <div className="relative flex w-64 md:-mt-64 md:w-[200px] md:self-end lg:absolute lg:right-0 lg:bottom-14 lg:mt-0 lg:w-[250px] xl:bottom-20 xl:w-[280px] 2xl:w-[340px]">
              <div className="border-radius-fix absolute inset-1 overflow-hidden rounded-[30px] md:inset-2 md:rounded-[30px] lg:rounded-[25px] xl:inset-3 xl:rounded-[30px] 2xl:inset-4 2xl:rounded-[40px]">
                <VideoPlayer
                  url={blok.video.url}
                  controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
                  externalControls={true}
                  playing={playing}
                  muted={muted}
                />
              </div>
              <div className="pointer-events-none">
                <Image
                  src="/images/iphone-frame-portrait.png"
                  width={580}
                  height={1171}
                  alt="Ask Jamie"
                  priority
                />
              </div>
            </div>
            <div className="z-10 mt-4 flex items-center space-x-2 md:absolute md:right-64 md:bottom-16 md:mt-0 md:space-x-4 lg:bottom-0 lg:right-0">
              <button
                onClick={() => setPlaying(!playing)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black/70 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
              >
                {playing ? (
                  <IconPause className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                ) : (
                  <IconPlay className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                )}
              </button>
              <button
                onClick={() => setMuted(!muted)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black/70 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
              >
                {muted ? (
                  <IconVolumeOff className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                ) : (
                  <IconVolumeOn className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
                )}
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="hidden h-[200vh] md:block" />
    </section>
  )
}

export default AskJamie

// export default AskJamie
// const AskJamie = ({blok}: any) => {
//   const refSection = React.useRef<HTMLDivElement>(null)
//   const [playing, setPlaying] = React.useState(true)
//   const [muted, setMuted] = React.useState(true)

//   const {start, end} = useRefScrollProgress(refSection)
//   const {scrollYProgress} = useViewportScroll()
//   const scrollOpacity = useTransform(scrollYProgress, [start, end], [0.05, 1])
//   return (
//     <section ref={refSection} {...sbEditable(blok)} key={blok._uid}>
//       <div
//         className="top-0 flex min-h-screen items-center bg-white py-12 md:sticky xl:py-24"
//         style={{transform: 'translate3d(0,0,0)'}}
//       >
//         <div className="container relative">
//           <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
//             {blok.title}
//           </h2>
//           <p className="relative z-10 mt-4 md:mt-8 md:max-w-xl md:text-xl lg:max-w-2xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
//             {blok.description}
//           </p>
//           <div className="relative mt-14 flex flex-col items-center md:-mt-20 md:pl-8 lg:block xl:pl-20">
//             <motion.div
//               className="mt-6 hidden w-[80%] md:block md:w-full md:pr-8 lg:pr-0 xl:mt-0 xl:w-[900px] 2xl:w-[1100px]"
//               style={{opacity: scrollOpacity}}
//             >
//               <Image
//                 src={blok.image.filename}
//                 width={2420}
//                 height={1366}
//                 alt="Ask Jamie"
//                 layout="responsive"
//               />
//             </motion.div>
//             <div className="relative flex w-64 md:-mt-64 md:w-[200px] md:self-end lg:absolute lg:right-0 lg:bottom-14 lg:mt-0 lg:w-[250px] xl:bottom-20 xl:w-[280px] 2xl:w-[340px]">
//               <div className="border-radius-fix absolute inset-1 overflow-hidden rounded-[30px] md:inset-2 md:rounded-[30px] lg:rounded-[25px] xl:inset-3 xl:rounded-[30px] 2xl:inset-4 2xl:rounded-[40px]">
//                 <VideoPlayer
//                   url={blok.video.url}
//                   controlsClasses="bottom-4 right-12 md:bottom-8 md:right-24 lg:bottom-14 lg:right-36 xl:bottom-16 xl:right-44"
//                   externalControls={true}
//                   playing={playing}
//                   muted={muted}
//                 />
//               </div>
//               <div className="pointer-events-none">
//                 <Image
//                   src="/images/iphone-frame-portrait.png"
//                   width={580}
//                   height={1171}
//                   alt="Ask Jamie"
//                   priority
//                 />
//               </div>
//             </div>
//             <div className="z-10 mt-4 flex items-center space-x-2 md:absolute md:right-64 md:bottom-16 md:mt-0 md:space-x-4 lg:bottom-0 lg:right-0">
//               <button
//                 onClick={() => setPlaying(!playing)}
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black/70 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
//               >
//                 {playing ? (
//                   <IconPause className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
//                 ) : (
//                   <IconPlay className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
//                 )}
//               </button>
//               <button
//                 onClick={() => setMuted(!muted)}
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black/70 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14"
//               >
//                 {muted ? (
//                   <IconVolumeOff className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
//                 ) : (
//                   <IconVolumeOn className="h-6 w-6 lg:h-8 lg:w-8 2xl:h-10 2xl:w-10" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hidden h-[200vh] md:block" />
//     </section>
//   )
// }
