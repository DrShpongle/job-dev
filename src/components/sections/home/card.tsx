import * as React from 'react'
import Link from 'next/link'
import {isEmpty} from 'lodash'

import ImageWithBlur from 'components/image-with-blur'

const Card: React.FC<{
  data: any
}> = ({data}) => {
  return (
    <div className="card-gradient group relative flex aspect-[4/3] select-none flex-col items-center justify-end overflow-hidden px-4 py-6 before:absolute before:inset-0 before:z-[1] before:block before:duration-300 md:aspect-video hover-hover:hover:before:opacity-0">
      {!isEmpty(data) && (
        <>
          <div className="absolute inset-0 origin-center duration-500 ease-in hover-hover:group-hover:scale-110">
            <div className="relative h-full w-full">
              <ImageWithBlur
                src={data?.content?.hero_image?.filename}
                layout="fill"
                objectFit="cover"
                alt={data.content?.title}
              />
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center space-y-2 px-2 text-center lg:space-y-3 xl:space-y-4">
            <h3 className="font-headings text-lg leading-none lg:text-2xl lg:leading-none xl:text-3xl xl:leading-none">
              {data.content.title}
            </h3>
            <p className="text-sm lg:text-lg">
              {data.content.short_description}
            </p>
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link href={data.full_slug}>
                <a className="flex rounded-full bg-pink px-4 py-1 font-headings text-sm uppercase text-white duration-150 md:px-6 md:py-2 md:text-base lg:text-lg xl:text-xl hover-hover:hover:bg-blue">
                  Read more
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/psych-mag',
                  query: {
                    filter: data.content.category[0].slug,
                  },
                }}
              >
                <a className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink duration-150 md:text-base lg:text-lg xl:text-xl hover-hover:hover:text-blue">
                  <span>More {data.content.category[0].slug}</span>
                  <span className="translate-y-0.5">&#62;</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Card
