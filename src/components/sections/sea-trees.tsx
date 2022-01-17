import * as React from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const EquationBlock: React.FC<{
  leftExpression: string
  rightExpression: string
  className: string
}> = ({leftExpression, rightExpression, className}) => {
  return (
    <div
      className={classNames(
        'flex flex-col items-center md:space-y-2 lg:space-y-3 xl:space-y-4 2xl:space-y-6 text-white text-center lg:border border-zinc-50 lg:px-12 xl:px-14 2xl:px-16 lg:py-10 2xl:py-12 text-base md:text-2xl lg:text-3xl 2xl:text-4xl font-headings w-full xl:w-[380px] 2xl:w-[450px]',
        className,
      )}
    >
      <div>{leftExpression}</div>
      <div>=</div>
      <div>{rightExpression}</div>
    </div>
  )
}

const Description: React.FC<{
  className?: string
}> = () => {
  return (
    <div className="flex flex-col items-center space-y-6 text-white md:space-y-10 lg:space-y-12 lg:items-start">
      <div className="flex justify-center lg:justify-start lg:items-center lg:space-x-4 flex-nowrap">
        <div className="hidden shrink-0 lg:block">
          <Image
            src="/images/sea-trees-logo.png"
            width={75}
            height={89}
            alt="SeaTrees"
          />
        </div>
        <h3 className="font-headings text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none text-center lg:text-left">
          SeaTrees
        </h3>
      </div>
      <p className="text-lg md:text-xl lg:text-2xl xl:leading-relaxed xl:text-[28px] 2xl:text-[34px]">
        Jamie O’Brien has partnered with the SeaTrees initiative to directly
        support communities planting and protecting blue-carbon coastal
        ecosystems. The most effective way to suck carbon out of the atmosphere
        - period.
      </p>
      <button className="px-10 py-3 text-white uppercase rounded-full bg-pink font-headings text-lg md:text-xl xl:text-[29px]">
        Find out more
      </button>
    </div>
  )
}

const SeaTrees = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/images/sea-trees.png"
          layout="fill"
          objectFit="cover"
          alt="SeaTrees"
        />
      </div>
      <div className="container">
        <div className="flex flex-col py-10 lg:py-24 lg:flex-row xl:py-32 2xl:py-40 md:py-16">
          <div className="flex items-center justify-between lg:justify-start lg:pr-16 lg:space-y-16 lg:w-1/2 lg:flex-col xl:pr-32 xl:w-3/5">
            <EquationBlock
              leftExpression="1 app download"
              rightExpression="1 sea tree planted"
              className="self-start"
            />
            <div className="w-10 mx-4 lg:hidden shrink-0 md:w-auto">
              <Image
                src="/images/sea-trees-logo.png"
                width={75}
                height={89}
                alt="SeaTrees"
              />
            </div>
            <EquationBlock
              leftExpression="1 booked experience"
              rightExpression="1 sea tree planted"
              className="self-end"
            />
          </div>
          <div className="mt-14 md:mt-20 lg:mt-0 lg:w-1/2 xl:w-2/5">
            <Description />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeaTrees
