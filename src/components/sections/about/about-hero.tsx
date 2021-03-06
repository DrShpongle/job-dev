import * as React from 'react'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'

import {useRefScrollProgress} from 'hooks/useRefScrollProgress'

const AboutHero = ({blok}: any) => {
  const refSection = React.useRef(null)
  const {start, end} = useRefScrollProgress(refSection, 0)
  const {scrollYProgress} = useScroll()

  const descriptionsList = blok.descriptions_list.map((item: any) => {
    return item.description_line
  })

  const opacityText = useTransform(scrollYProgress, [start, end / 2], [1, 0])
  return (
    <section
      ref={refSection}
      className="flex min-h-screen flex-col pt-12 md:pt-20 xl:pt-24"
    >
      <motion.div
        className="fixed top-40 w-full duration-200 will-change-transform"
        style={{opacity: opacityText}}
      >
        <div className="text-center font-headings text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {descriptionsList.map((item: string, i: number) => {
            return i === 0 ? <h1 key={i}>{item}</h1> : <h2 key={i}>{item}</h2>
          })}
        </div>
      </motion.div>
      <div className="container flex grow flex-col justify-end pt-72">
        <Image
          src="/images/job.webp"
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
