import * as React from 'react'
import Image from 'next/image'

const Card: React.FC<{
  data: any
  readMore?: boolean
}> = ({data, readMore}) => (
  <>
    <style jsx>
      {`
        .mag-item:before {
          background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.7) 10%,
            rgba(255, 255, 255, 0.5) 20%,
            rgba(255, 255, 255, 0.3) 40%,
            rgba(255, 255, 255, 0.1) 100%
          );
        }
      `}
    </style>
    <div className="mag-item group relative flex h-[260px] flex-col items-center justify-end overflow-hidden px-4 py-6 before:absolute before:inset-0 before:z-[1] before:block before:duration-300 md:h-[280px] lg:h-[340px] lg:p-6 xl:h-[420px] xl:p-9 hover-hover:hover:before:opacity-0">
      <div className="absolute inset-0 origin-center duration-500 ease-in hover-hover:group-hover:scale-110">
        <div className="relative h-full w-full">
          <Image
            src={data.image}
            layout="fill"
            objectFit="cover"
            alt={data.title}
            priority
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-2 text-center lg:space-y-3 xl:space-y-4">
        <h3 className="font-headings text-lg leading-none md:text-xl md:leading-none lg:text-2xl lg:leading-none xl:text-4xl xl:leading-none">
          {data.title}
        </h3>
        <p className="text-sm lg:text-lg">{data.description}</p>
        {readMore ? (
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a
              href="#"
              className="flex rounded-full bg-pink px-4 py-1 font-headings text-sm uppercase text-white md:px-6 md:py-2 md:text-base lg:text-lg xl:text-xl"
            >
              Read more
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl"
            >
              <span>More {data.category}</span>
              <span className="translate-y-0.5">&#62;</span>
            </a>
          </div>
        ) : (
          <a
            href="#"
            className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl"
          >
            <span>Read more</span>
            <span className="translate-y-0.5">&#62;</span>
          </a>
        )}
      </div>
    </div>
  </>
)

export default Card
