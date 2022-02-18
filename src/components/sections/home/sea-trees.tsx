import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import {sbEditable} from '@storyblok/storyblok-editable'

const EquationBlock: React.FC<{
  leftExpression: string
  rightExpression: string
  className: string
}> = ({leftExpression, rightExpression, className}) => {
  return (
    <div
      className={classNames(
        'flex w-full flex-col items-center border-zinc-50 text-center font-headings text-base text-white md:space-y-2 md:text-2xl lg:space-y-3 lg:border lg:px-12 lg:py-10 lg:text-3xl xl:w-[380px] xl:space-y-4 xl:px-14 2xl:w-[450px] 2xl:space-y-6 2xl:px-16 2xl:py-12 2xl:text-4xl',
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
    <div className="flex flex-col items-center space-y-6 md:space-y-10 lg:items-start lg:space-y-12 lg:text-white">
      <div className="flex flex-nowrap justify-center lg:items-center lg:justify-start lg:space-x-4">
        <div className="hidden shrink-0 lg:block">
          <Image
            src="/images/sea-trees-logo-small.png"
            width={75}
            height={89}
            alt="SeaTrees"
            priority
          />
        </div>
        <h3 className="text-center font-headings text-4xl leading-none md:text-6xl lg:text-left lg:text-7xl xl:text-8xl 2xl:text-[111px]">
          SeaTrees
        </h3>
      </div>
      <p className="md:text-xl lg:text-2xl xl:text-[28px] xl:leading-relaxed 2xl:text-[34px]">
        Jamie O’Brien has partnered with the SeaTrees initiative to directly
        support communities planting and protecting blue-carbon coastal
        ecosystems. The most effective way to suck carbon out of the atmosphere
        - period.
      </p>
      <Link href="/sea-trees">
        <a className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white md:py-4 md:text-xl xl:px-10 xl:text-[29px]">
          Find out more
        </a>
      </Link>
    </div>
  )
}

const SeaTrees = ({blok}: any) => {
  return (
    <section
      className="relative z-10 bg-white"
      style={{transform: 'translate3d(0,0,0)'}}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      <div className="relative">
        <div className="absolute inset-0 z-[-1]">
          <div className="relative h-full w-full">
            <Image
              src="/images/sea-trees.jpg"
              layout="fill"
              objectFit="cover"
              alt="SeaTrees"
              priority
            />
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col py-16 md:py-16 lg:flex-row lg:py-24 xl:py-32 2xl:py-40">
            <div className="flex items-center justify-between lg:w-1/2 lg:flex-col lg:justify-start lg:space-y-16 lg:pr-16 xl:w-3/5 xl:pr-32">
              <EquationBlock
                leftExpression="1 app download"
                rightExpression="1 sea tree planted"
                className="self-start"
              />
              <div className="mx-4 w-10 shrink-0 md:w-auto lg:hidden">
                <Image
                  src="/images/sea-trees-logo-small.png"
                  width={75}
                  height={89}
                  alt="SeaTrees"
                  priority
                />
              </div>
              <EquationBlock
                leftExpression="1 booked experience"
                rightExpression="1 sea tree planted"
                className="self-end"
              />
            </div>
            <div className="hidden lg:block lg:w-1/2 xl:w-2/5">
              <Description />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-10 w-full md:mt-12 lg:hidden">
          <Description />
        </div>
      </div>
    </section>
  )
}

export default SeaTrees
