import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Features = () => {
  return (
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
      <section
        className="bg-slate-100 py-5 md:py-7 xl:py-8 2xl:py-12"
        style={{transform: 'translate3d(0,0,0)'}}
      >
        <div className="container">
          <div className="flex w-full flex-col items-center space-y-5 bg-white px-5 py-8 text-center md:space-y-6 md:py-10 lg:space-y-7 lg:py-12 xl:space-y-8 xl:py-14">
            <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
              Features
            </h2>
            <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:text-[34px] 2xl:leading-normal">
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam, sus quia quis doluptio illatem et aut.
            </p>
          </div>
          <div className="mt-5 grid gap-5 md:mt-7 md:grid-cols-2 md:gap-7">
            {fakeData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="mag-item group relative flex h-[260px] flex-col items-center justify-end overflow-hidden px-4 py-6 before:absolute before:inset-0 before:z-[1] before:block before:duration-300 md:h-[280px] lg:h-[340px] lg:p-6 xl:h-[420px] xl:p-9 hover-hover:hover:before:opacity-0"
                >
                  <div className="absolute inset-0 origin-center duration-500 ease-in hover-hover:group-hover:scale-110">
                    <div className="relative h-full w-full">
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        alt={item.title}
                        priority
                      />
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center space-y-2 text-center lg:space-y-3 xl:space-y-4">
                    <h3 className="font-headings text-lg leading-none md:text-xl md:leading-none lg:text-2xl lg:leading-none xl:text-4xl xl:leading-none">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-lg">{item.description}</p>
                    <a
                      href="#"
                      className="flex items-center space-x-1 whitespace-nowrap font-headings text-sm text-pink md:text-base lg:text-lg xl:text-xl"
                    >
                      <span>Read more</span>
                      <span className="translate-y-0.5">&#62;</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          <button className="mt-5 flex h-11 w-full items-center justify-center rounded-sm bg-pink font-headings uppercase text-white md:mt-6 md:h-12 md:text-lg lg:mt-7 lg:h-14 lg:text-xl">
            More features
          </button>
        </div>
      </section>
    </>
  )
}

export default Features

// TODO: substitute the array below with real data
const fakeData = [
  {
    title: 'best tube riders of all time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/1.png',
  },
  {
    title: 'the deep blue bag',
    description: 'Great everyday bag that you can feel good about using',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/2.png',
  },
  {
    title: '5 all female surf films you need to watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/3.png',
  },
  {
    title: 'top 5 eco-friendly wetsuits',
    description: 'Great everyday bag that you can feel good about using',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/4.png',
  },
  {
    title: 'best presents for surfers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/5.png',
  },
  {
    title: 'health benefits of surfing',
    description: 'Great everyday bag that you can feel good about using',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/6.png',
  },
]
