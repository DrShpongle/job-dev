import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import {isEmpty} from 'lodash'

const Card: React.FC<{
  data: any
  withAnchor?: boolean
  forCarousel?: boolean
  aspectRatio?: string
}> = ({
  data,
  withAnchor,
  forCarousel,
  aspectRatio = 'aspect-[4/3] md:aspect-video',
}) => {
  return forCarousel ? (
    <div className="relative">
      {!isEmpty(data) ? (
        <>
          <div
            className={classNames(
              'card-gradient relative block before:absolute before:inset-0 before:z-[1] before:block before:duration-300 hover-hover:hover:before:opacity-0',
              aspectRatio,
            )}
          >
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                <Image
                  src={data.content.hero_image.filename}
                  alt={data.content.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex select-none flex-col justify-end md:pointer-events-none md:absolute md:inset-0 md:top-0 md:pb-6">
            <div className="relative z-10 flex flex-col items-center space-y-2 px-2 text-center lg:space-y-3 xl:space-y-4">
              <h3 className="font-headings text-lg leading-none lg:text-2xl lg:leading-none xl:text-3xl xl:leading-none">
                {data.content.title}
              </h3>
              <p className="text-sm lg:text-lg">
                {data.content.brief_description}
              </p>
              <Link href={data.full_slug}>
                <a className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl">
                  <span>Read more</span>
                  <span className="translate-y-0.5">&gt;</span>
                </a>
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  ) : (
    <div
      className={classNames(
        'card-gradient group relative flex select-none flex-col items-center justify-end overflow-hidden px-4 py-6 before:absolute before:inset-0 before:z-[1] before:block before:duration-300 hover-hover:hover:before:opacity-0',
        aspectRatio,
      )}
    >
      {!isEmpty(data) && (
        <>
          <div className="absolute inset-0 origin-center duration-500 ease-in hover-hover:group-hover:scale-110">
            <div className="relative h-full w-full">
              <Image
                src={data?.content?.hero_image?.filename}
                layout="fill"
                objectFit="cover"
                alt={data.content?.title}
                priority
              />
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center space-y-2 px-2 text-center lg:space-y-3 xl:space-y-4">
            <h3 className="font-headings text-lg leading-none lg:text-2xl lg:leading-none xl:text-3xl xl:leading-none">
              {data.content.title}
            </h3>
            <p className="text-sm lg:text-lg">{data.content.description}</p>
            {withAnchor ? (
              <div className="flex items-center space-x-4 lg:space-x-6">
                <Link href={data.full_slug}>
                  <a className="flex rounded-full bg-pink px-4 py-1 font-headings text-sm uppercase text-white md:px-6 md:py-2 md:text-base lg:text-lg xl:text-xl">
                    Read more
                  </a>
                </Link>
                <Link href={`/psych-mag/#${data.content.category[0].slug}`}>
                  <a className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl">
                    <span>More {data.content.category[0].slug}</span>
                    <span className="translate-y-0.5">&#62;</span>
                  </a>
                </Link>
              </div>
            ) : (
              <Link href={data.full_slug}>
                <a className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl">
                  <span>Read more</span>
                  <span className="translate-y-0.5">&#62;</span>
                </a>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
