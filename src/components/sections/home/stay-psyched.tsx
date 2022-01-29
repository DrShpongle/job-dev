import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'

const StayPsyched = () => {
  return (
    <section className="relative z-10 pt-12 pb-5 md:pb-7 bg-slate-50 xl:py-7">
      <div className="container">
        <div className="flex flex-col space-y-12 xl:flex-row xl:space-y-0">
          <div className="w-full xl:w-2/5 xl:pr-8 xl:pt-36">
            <h3 className="text-pink text-4xl xl:text-6xl 2xl:text-[70px] font-accented">
              Stay Psyched
            </h3>
            <div className="flex flex-col items-start space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
              <h2 className="text-4xl leading-none md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                with The <br className="block lg:hidden xl:block" />
                Jamie O&#8217;Brien <br />
                Collection
              </h2>
              <p className="md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal">
                Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
                nem nonsedit, utestiam, sus quia quis doluptio illatem et aut.
              </p>
              <Link href="/surf-mag">
                <a className="px-6 xl:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl lg:text-lg xl:text-2xl 2xl:text-[29px]">
                  Visit the shop
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-3/5">
            <div className="grid w-full grid-cols-2 gap-5 lg:grid-cols-3 md:gap-7">
              {fakeData.map((item, i) => {
                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={classNames(
                      'pt-4 pb-2 md:pt-7 md:pb-4 px-2 flex flex-col items-center h-[400px] md:h-[498px] bg-white space-y-7 group overflow-hidden',
                      i === 0 && 'col-span-2',
                    )}
                  >
                    <div className="relative w-full duration-300 grow hover-hover:group-hover:scale-110">
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="contain"
                        alt={item.title}
                        priority
                      />
                    </div>
                    <div className="flex flex-col items-center shrink-0 min-h-[122px]">
                      {item.isNew && (
                        <h4 className="text-pink font-accented text-[26px] mb-2">
                          New
                        </h4>
                      )}
                      <div className="space-y-1 leading-normal text-center md:text-lg">
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
const fakeData = [
  {
    title: 'Signature JOB Speedo',
    price: '50.00',
    isNew: true,
    image: '/images/fake-data-images/stay-psyched/1.png',
    url: 'https://www.jamieobrienshop.com/collections/frontpage/products/signature-job-speedo-pre-order',
  },
  {
    title: 'Psych Juice Flask',
    price: '60.00',
    isNew: true,
    image: '/images/fake-data-images/stay-psyched/2.png',
    url: 'https://www.jamieobrienshop.com/collections/frontpage/products/psych-juice-flask',
  },
  {
    title: 'Stay Psyched College Hoodie',
    price: '60.00',
    isNew: true,
    image: '/images/fake-data-images/stay-psyched/3.png',
    url: 'https://www.jamieobrienshop.com/collections/clothing-1/products/stay-psyched-college-hoodie',
  },
  {
    title: 'JOB Shaka Sticker',
    price: '3.00',
    isNew: true,
    image: '/images/fake-data-images/stay-psyched/4.png',
    url: 'https://www.jamieobrienshop.com/collections/stickers/products/job-shaka-sticker',
  },
  {
    title: 'Stay Psyched Lanyard',
    option: 'Light Blue',
    price: '60.00',
    isNew: true,
    image: '/images/fake-data-images/stay-psyched/5.png',
    url: 'https://www.jamieobrienshop.com/collections/accessories/products/stay-psyched-lanyard-light-blue',
  },
]
