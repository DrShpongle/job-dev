import * as React from 'react'

const Hero: React.FC<{title: string; subtitle: string}> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="container">
      <div className="space-y-5 pb-10 md:space-y-6 lg:space-y-7 xl:space-y-8">
        <h1 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          {title}
        </h1>
        <p className="mx-auto max-w-4xl text-center md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Hero
