import * as React from 'react'
import {render} from 'storyblok-rich-text-react-renderer'

import ImageWithBlur from 'components/image-with-blur'

const JamieInTheWater = ({blok}: any) => {
  return (
    <section
      className="bg-white py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <div className="flex flex-col items-end text-right">
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            {blok.title}
          </h3>
          <h2 className="mt-1 text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            {blok.subtitle}
          </h2>
          <div className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
            {render(blok.text)}
          </div>
        </div>
        <div className="mt-8 flex md:mt-16 xl:mt-20 2xl:mt-24">
          <ImageWithBlur
            src={blok.image.filename}
            width={1920}
            height={1078}
            alt="Jamie O’Brien"
          />
        </div>
      </div>
    </section>
  )
}

export default JamieInTheWater
