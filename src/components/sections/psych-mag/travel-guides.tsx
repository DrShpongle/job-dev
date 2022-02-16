import * as React from 'react'

import Card from 'components/card'

const TravelGuides = () => {
  return (
    <section
      className="bg-blue pb-5 pt-12 md:pb-7 md:pt-20 xl:pb-8 xl:pt-24 2xl:pb-12"
      id="travel-guides"
    >
      <div className="container">
        <div className="flex w-full flex-col items-center space-y-5 text-center text-white md:space-y-6 lg:space-y-7 xl:space-y-8">
          <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            Travel Guides
          </h2>
          <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut.
          </p>
        </div>
        <div className="mt-10 space-y-5 md:mt-16 md:space-y-7 xl:mt-20">
          {fakeData.map((item, i) => {
            return <Card key={i} data={item} />
          })}
        </div>
        <button className="mt-5 flex h-11 w-full items-center justify-center rounded-sm bg-pink font-headings uppercase text-white md:mt-6 md:h-12 md:text-lg lg:mt-7 lg:h-14 lg:text-xl">
          More features
        </button>
      </div>
    </section>
  )
}

export default TravelGuides

// TODO: substitute the array below with real data
const fakeData = [
  {
    title: 'Biggest waves around the world',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'travel-guides',
    image: '/images/fake-data-images/travel-guides/1.jpg',
  },
  {
    title: '20 best longboarding waves around the world',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'travel-guides',
    image: '/images/fake-data-images/travel-guides/2.jpg',
  },
]
