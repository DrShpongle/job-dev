import * as React from 'react'
import Image from 'next/image'
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'
import VideoEmbed from 'components/video-embed'

const GetPsyched = () => {
  // const refPhoneFrame = React.useRef<HTMLDivElement>(null)
  // const {start, end} = useRefScrollProgress(refPhoneFrame, 200)
  // const {scrollYProgress} = useViewportScroll()
  // const rangeY = useTransform(scrollYProgress, [start, end], ['100%', '35%'])
  const refGetPsyched = React.useRef<HTMLDivElement>(null)
  const {start, end} = useRefScrollProgress(refGetPsyched)
  const {scrollYProgress} = useViewportScroll()
  const controlsLogo = useAnimation()
  const scaleIphone = useTransform(
    scrollYProgress,
    [start, end],
    ['150%', '35%'],
  )
  const scaleText = useTransform(
    scrollYProgress,
    [start, end],
    ['50%', '-150%'],
  )

  React.useEffect(() => {
    const triggerLogoAnimation = () => {
      // console.log('scaleIphone.get():', scaleIphone.get())
      if (parseInt(scaleIphone.get()) < 40) {
        controlsLogo.start('shown')
      } else {
        controlsLogo.start('hidden')
      }
    }
    const unsubscribeY = scaleIphone.onChange(triggerLogoAnimation)
    return () => {
      unsubscribeY()
    }
  }, [])

  return (
    <section
      ref={refGetPsyched}
      className="sticky top-0 z-[1] h-screen overflow-hidden"
    >
      <VideoEmbed
        // src="/videos/get-psyched.mp4"
        src="https://cdn.videvo.net/videvo_files/video/free/2017-08/large_watermarked/170724_15_Setangibeach_preview.mp4"
        className="absolute bottom-0 w-full h-full"
      />
      <div className="absolute z-20 flex justify-center w-full space-x-3 md:items-end md:right-12 top-32 md:space-x-0 md:space-y-3 md:flex-col">
        <a href="#" className="w-28 md:w-44 xl:w-auto">
          <Image
            src="/images/download-on-app-store.svg"
            width={240}
            height={80}
            alt="Download on App Store"
          />
        </a>
        <a href="#" className="w-28 md:w-44 xl:w-auto">
          <Image
            src="/images/get-it-on-google-play.svg"
            width={240}
            height={80}
            alt="Get it on Google Play"
          />
        </a>
      </div>

      <motion.div
        className="relative z-10 w-full px-12 top-72"
        style={{y: scaleText}}
      >
        <h3 className="text-pink text-5xl xl:text-6xl 2xl:text-[70px] font-accented">
          Get Psyched
        </h3>
        <div className="max-w-[44rem] text-white">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
            with Jamie in
            <br /> your pocket
          </h2>
          <p className="mt-12 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut optat quam
            nam nimagnis doloreh enistorro vendis voluptaqua.
          </p>
        </div>
        <div className="flex items-center mt-8 space-x-6 md:space-x-10 pb-[400px] md:pb-[520px] lg:pb-[650px] xl:pb-[700px] 2xl:pb-[840px]">
          <button className="px-6 md:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl xl:text-[29px]">
            Download App
          </button>
          <a
            href="#"
            className="flex items-center space-x-1 md:text-[29px] text-pink font-headings"
          >
            <span>Learn more</span>
            <span className="translate-y-0.5">&#62;</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{y: scaleIphone}}
        initial={{y: '100%'}}
        className="w-[280px] md:w-[380px] lg:w-[460px] xl:w-[540px] 2xl:w-[580px] absolute mx-auto bottom-0 left-0 right-0 translate-y-1/2 flex justify-center"
      >
        <Image
          src="/images/iphone-frame-portrait.png"
          width={909}
          height={1835}
          alt="Jamie O'Brien"
          priority
        />
        <div className="absolute w-4/5 top-[20%]">
          <div className="w-full">
            <motion.div
              variants={{hidden: {opacity: 0}, shown: {opacity: 1}}}
              initial="hidden"
              animate={controlsLogo}
              transition={{
                duration: 0.5,
              }}
            >
              <Image
                src="/images/job-app-logo.png"
                width={867}
                height={664}
                layout="responsive"
                alt="Jamie O'Brien"
                priority
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
// const GetPsyched = () => {
//   const refPhoneFrame = React.useRef<HTMLDivElement>(null)
//   const {start, end} = useRefScrollProgress(refPhoneFrame, 200)
//   const {scrollYProgress} = useViewportScroll()
//   const rangeY = useTransform(scrollYProgress, [start, end], ['100%', '35%'])
//   return (
//     <section className="relative overflow-hidden pt-14 md:pt-20 lg:pt-32 xl:pt-40">
//       <VideoEmbed
//         src="https://cdn.videvo.net/videvo_files/video/free/2017-08/large_watermarked/170724_15_Setangibeach_preview.mp4"
//         className="absolute bottom-0 z-[-1] w-auto h-full"
//       />
//       <div className="container">
//         <div className="flex flex-nowrap">
//           <div className="w-full md:w-2/3">
//             <h3 className="text-pink text-5xl xl:text-6xl 2xl:text-[70px] font-accented">
//               Get Psyched
//             </h3>
//             <div className="max-w-[44rem]">
//               <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
//                 with Jamie in
//                 <br /> your pocket
//               </h2>
//               <p className="mt-12 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
//                 Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
//                 nem nonsedit, utestiam, sus quia quis doluptio illatem et aut
//                 optat quam nam nimagnis doloreh enistorro vendis voluptaqua.
//               </p>
//             </div>
// <div
//   ref={refPhoneFrame}
//   className="flex items-center mt-8 space-x-6 md:space-x-10 pb-[400px] md:pb-[520px] lg:pb-[650px] xl:pb-[700px] 2xl:pb-[840px]"
// >
//   <button className="px-6 md:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl xl:text-[29px]">
//     Download App
//   </button>
//   <a
//     href="#"
//     className="flex items-center space-x-1 md:text-[29px] text-pink font-headings"
//   >
//     <span>Learn more</span>
//     <span className="translate-y-0.5">&#62;</span>
//   </a>
// </div>
//           </div>
//           <div className="flex justify-center w-0 md:w-1/3">
// <div className="absolute z-10 flex space-x-3 left-4 md:space-x-0 md:space-y-3 md:flex-col md:static bottom-4">
//   <a href="#" className="w-28 md:w-44 xl:w-auto">
//     <Image
//       src="/images/download-on-app-store.svg"
//       width={240}
//       height={80}
//       alt="Download on App Store"
//     />
//   </a>
//   <a href="#" className="w-28 md:w-44 xl:w-auto">
//     <Image
//       src="/images/get-it-on-google-play.svg"
//       width={240}
//       height={80}
//       alt="Get it on Google Play"
//     />
//   </a>
// </div>
//           </div>
//         </div>
//       </div>
//       <motion.div
//         style={{y: rangeY}}
//         initial={{y: '90%'}}
//         className="w-[280px] md:w-[380px] lg:w-[460px] xl:w-[540px] 2xl:w-[580px] absolute mx-auto bottom-0 left-0 right-0 translate-y-1/2 flex justify-center"
//       >
//         <Image
//           src="/images/iphone-frame-portrait.png"
//           width={909}
//           height={1835}
//           alt="Jamie O'Brien"
//           priority
//         />
//         <div className="absolute w-4/5 top-[20%]">
//           <Image
//             src="/images/job-app-logo.png"
//             width={867}
//             height={664}
//             layout="responsive"
//             alt="Jamie O'Brien"
//           />
//         </div>
//       </motion.div>
//     </section>
//   )
// }

export default GetPsyched
