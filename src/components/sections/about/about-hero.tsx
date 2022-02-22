import * as React from 'react'
import Image from 'next/image'
import {motion, useViewportScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const AboutHero = ({blok}: any) => {
  const [_, setIsMounted] = React.useState<boolean>(false)
  const refSection = React.useRef(null)
  const {start, end} = useRefScrollProgress(refSection, 0)
  const {scrollYProgress} = useViewportScroll()

  const descriptionsList = blok.descriptions_list.map((item: any) => {
    return item.description_line
  })

  React.useEffect(() => {
    setIsMounted(true)
  }, [end])

  const opacityText = useTransform(scrollYProgress, [start, end / 2], [1, 0])
  return (
    <section
      ref={refSection}
      className="flex min-h-screen flex-col pt-12 md:pt-20 xl:pt-24"
    >
      <motion.div
        className="fixed top-40 w-full duration-200"
        style={{opacity: opacityText}}
      >
        <div className="text-center font-headings text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {descriptionsList.map((item: string, i: number) => {
            return <div key={i}>{item}</div>
          })}
        </div>
      </motion.div>
      <div className="container flex grow flex-col justify-end pt-72">
        <Image
          src="/images/job.png"
          width={1686}
          height={1124}
          priority
          alt="Jamie O’Brien"
        />
      </div>
    </section>
  )
}

export default AboutHero

const textArray = [
  'Imagine if you could get 5 minutes with one of the best surfers of all time. Now you can.',
  'You want to get spat out of a monster barrel and have everyone on the beach Scream? Jamie’s got you.',
  'Or how about learning how to do a perfect bottom turn? Just grab your phone and get an instant answer on how to improve. Let’s GO!',
]
