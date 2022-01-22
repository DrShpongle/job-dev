import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PsychMag = () => {
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
      <section className="bg-slate-50 py-7">
        <div className="container">
          <div className="flex flex-col items-center w-full px-5 py-8 space-y-5 text-center bg-white md:space-y-6 lg:space-y-7 xl:space-y-8 md:py-10 lg:py-12 xl:py-14">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px] leading-none">
              Psych Mag
            </h2>
            <p className="mt-12 md:text-xl lg:text-2xl xl:text-3xl lg:leading-normal xl:leading-normal 2xl:text-[34px] 2xl:leading-normal max-w-6xl">
              Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae
              nem nonsedit, utestiam, sus quia quis doluptio illatem et aut.
            </p>
            <Link href="/surf-mag">
              <a className="px-6 xl:px-10 py-2 md:py-4 text-white uppercase rounded-full bg-pink font-headings md:text-xl lg:text-lg xl:text-2xl 2xl:text-[29px]">
                Read the mag
              </a>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-7 mt-7">
            {fakeData.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center justify-end h-[260px] md:h-[280px] lg:h-[340px] xl:h-[420px] relative px-4 py-6 lg:p-6 xl:p-9 mag-item before:absolute before:inset-0 before:block before:z-[1] hover-hover:hover:before:opacity-0 before:duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 duration-500 ease-in origin-center hover-hover:group-hover:scale-110">
                    <Image
                      src={item.image}
                      layout="fill"
                      objectFit="cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center space-y-2 text-center lg:space-y-3 xl:space-y-4">
                    <h3 className="text-lg leading-none md:leading-none lg:leading-none xl:leading-none md:text-xl lg:text-2xl xl:text-4xl font-headings">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-lg">{item.description}</p>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <a
                        href="#"
                        className="flex px-4 py-1 text-sm text-white uppercase rounded-full md:px-6 md:py-2 md:text-base lg:text-lg xl:text-xl bg-pink font-headings"
                      >
                        Read more
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-1 text-sm md:text-base lg:text-lg xl:text-xl text-pink font-headings whitespace-nowrap"
                      >
                        <span>More {item.category}</span>
                        <span className="translate-y-0.5">&#62;</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default PsychMag

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
