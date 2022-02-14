import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

const StayPsyched: React.FC<any> = ({blok}) => {
  console.log('blok:', blok)
  return (
    <section
      className="bg-slate-100 pt-12 pb-5 md:pb-7 xl:py-7"
      style={{transform: 'translate3d(0,0,0)'}}
    >
      <div className="container">
        <div className="flex flex-col space-y-12 xl:flex-row xl:space-y-0">
          <div className="w-full xl:w-2/5 xl:pr-8 xl:pt-36">
            <h3 className="font-accented text-3xl text-pink md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px]">
              {blok.title}
              {/* Stay Psyched */}
            </h3>
            <div className="flex flex-col items-start space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
              <h2 className="text-4xl leading-none md:max-w-[18rem] md:text-5xl lg:max-w-xl lg:text-6xl xl:max-w-none xl:text-7xl 2xl:text-8xl">
                {blok.subtitle}
                {/* with The <br className="block lg:hidden xl:block" />
                Jamie O&#8217;Brien <br />
                Collection */}
              </h2>
              <p className="md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal">
                {blok.description}
                {/* Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
                nem nonsedit, utestiam, sus quia quis doluptio illatem et aut. */}
              </p>
              <Link href="/psych-mag">
                <a className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white md:py-4 md:text-xl lg:text-lg xl:px-10 xl:text-2xl 2xl:text-[29px]">
                  Visit the shop
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-3/5">
            <div className="grid w-full grid-cols-2 gap-5 md:gap-7 lg:grid-cols-3">
              {blok.magItems.map((item: any, i: number) => {
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(
                      'group flex h-[400px] flex-col items-center space-y-7 overflow-hidden bg-white px-2 pt-4 pb-2 md:h-[498px] md:pt-7 md:pb-4',
                      i === 0 && 'col-span-2',
                    )}
                  >
                    {item?.image?.filename && (
                      <div className="relative w-full grow duration-300 hover-hover:group-hover:scale-110">
                        <Image
                          src={item.image.filename}
                          layout="fill"
                          objectFit="contain"
                          alt={item.title}
                          priority
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

// TODO: substitute the array below with real data
// const fakeData = [
//   {
//     title: 'Signature JOB Speedo',
//     price: '50.00',
//     isNew: true,
//     image: '/images/fake-data-images/stay-psyched/1.png',
//     url: 'https://www.jamieobrienshop.com/collections/frontpage/products/signature-job-speedo-pre-order',
//   },
//   {
//     title: 'Psych Juice Flask',
//     price: '60.00',
//     isNew: true,
//     image: '/images/fake-data-images/stay-psyched/2.png',
//     url: 'https://www.jamieobrienshop.com/collections/frontpage/products/psych-juice-flask',
//   },
//   {
//     title: 'Stay Psyched College Hoodie',
//     price: '60.00',
//     isNew: true,
//     image: '/images/fake-data-images/stay-psyched/3.png',
//     url: 'https://www.jamieobrienshop.com/collections/clothing-1/products/stay-psyched-college-hoodie',
//   },
//   {
//     title: 'JOB Shaka Sticker',
//     price: '3.00',
//     isNew: true,
//     image: '/images/fake-data-images/stay-psyched/4.png',
//     url: 'https://www.jamieobrienshop.com/collections/stickers/products/job-shaka-sticker',
//   },
//   {
//     title: 'Stay Psyched Lanyard',
//     option: 'Light Blue',
//     price: '60.00',
//     isNew: true,
//     image: '/images/fake-data-images/stay-psyched/5.png',
//     url: 'https://www.jamieobrienshop.com/collections/accessories/products/stay-psyched-lanyard-light-blue',
//   },
// ]
