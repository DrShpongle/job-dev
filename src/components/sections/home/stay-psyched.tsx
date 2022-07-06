import * as React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import {sbEditable} from '@storyblok/storyblok-editable'

import ImageWithBlur from 'components/image-with-blur'

const StayPsyched: React.FC<any> = ({blok}) => {
  return (
    <section
      className="bg-gradient-to-b from-pink to-pink/50 pt-12 pb-5 md:pb-7 xl:py-7"
      style={{transform: 'translate3d(0,0,0)'}}
      {...sbEditable(blok)}
    >
      <div className="container">
        <div className="flex flex-col space-y-12 xl:flex-row xl:space-y-0">
          <div className="w-full xl:w-2/5 xl:pr-8 xl:pt-36">
            <h3 className="font-accented text-3xl text-blue md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
              {blok.title}
            </h3>
            <div className="flex flex-col items-start space-y-5 text-white md:space-y-6 lg:space-y-7 xl:space-y-8">
              <h2 className="text-4xl leading-none md:max-w-[18rem] md:text-5xl lg:max-w-xl lg:text-6xl xl:max-w-none xl:text-7xl 2xl:text-8xl">
                {blok.subtitle}
              </h2>
              <p className="md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal">
                {blok.description}
              </p>
              <a
                href={blok.shop_url.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-blue px-6 py-2 font-headings uppercase text-white duration-150 md:py-4 md:text-xl lg:text-lg xl:px-10 xl:text-2xl 2xl:text-[29px] hover-hover:hover:bg-white hover-hover:hover:text-blue"
              >
                Visit the shop
              </a>
            </div>
          </div>
          <div className="w-full xl:w-3/5">
            <div className="grid w-full grid-cols-2 gap-5 md:gap-7 lg:grid-cols-3">
              {blok.magItems.map((item: any, i: number) => {
                return (
                  <a
                    key={i}
                    href={item.url.url}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(
                      'group flex h-[400px] flex-col items-center space-y-7 overflow-hidden bg-white px-4 pt-4 pb-2 md:h-[498px] md:px-5 md:pt-5 md:pb-4',
                      i === 0 && 'col-span-2',
                    )}
                  >
                    {item?.image?.filename && (
                      <div className="relative w-full grow duration-300 hover-hover:group-hover:scale-[1.05]">
                        <ImageWithBlur
                          src={item.image.filename}
                          layout="fill"
                          objectFit="cover"
                          alt={item.title}
                        />
                      </div>
                    )}
                    <div className="flex min-h-[122px] shrink-0 flex-col items-center">
                      {item.isNew && (
                        <h4 className="mb-2 font-accented text-[26px] text-pink">
                          New
                        </h4>
                      )}
                      <div className="space-y-1 text-center leading-normal md:text-lg">
                        <div>
                          <p className="line-clamp-2">{item.title}</p>
                          {item?.option && <p>({item.option})</p>}
                        </div>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StayPsyched
