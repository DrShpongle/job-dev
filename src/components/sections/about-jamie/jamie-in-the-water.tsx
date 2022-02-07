import * as React from 'react'
import Image from 'next/image'

const JamieInTheWater = () => {
  return (
    <section
      className="bg-white py-12 md:py-20 xl:py-24"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <div className="flex flex-col items-end">
          <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
            Get Psyched
          </h3>
          <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            sus quia quis doluptio
          </h2>
          <p className="mt-4 md:mt-8 md:text-xl lg:text-2xl lg:leading-normal xl:max-w-4xl xl:text-3xl xl:leading-normal 2xl:max-w-5xl">
            Jamie improved by watching clips of his favourite surfers over and
            over and over again. The JOB Surf app has technique specific clip
            rolls. You want to watch Jamie land his signature backside barrels
            on repeat so YOU can replicate? We have got you covered!
          </p>
        </div>
        <div className="mt-8 flex">
          <Image
            src="/images/jamie-in-the-water.jpg"
            width={1920}
            height={1078}
          />
        </div>
      </div>
    </section>
  )
}

export default JamieInTheWater
