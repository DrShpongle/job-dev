import * as React from 'react'
import Link from 'next/link'
import {sbEditable} from '@storyblok/storyblok-editable'

import Card from 'components/card'

const PsychMag = ({blok}: any) => {
  console.log('blok:', blok)
  return (
    <section
      className="bg-blue py-5 md:py-7 xl:py-8 2xl:py-12"
      style={{transform: 'translate3d(0,0,0)'}}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      <div className="container">
        <div className="flex w-full flex-col items-center space-y-5 bg-white px-5 py-8 text-center md:space-y-6 md:py-10 lg:space-y-7 lg:py-12 xl:space-y-8 xl:py-14">
          <h2 className="text-5xl leading-none md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[111px]">
            Psych Mag
          </h2>
          <p className="max-w-4xl md:text-xl lg:text-2xl lg:leading-normal xl:text-3xl xl:leading-normal 2xl:max-w-5xl 2xl:text-[34px] 2xl:leading-normal">
            Expliqua sitibusa pe nullest, velitiust porerum vel escipsamusae nem
            nonsedit, utestiam, sus quia quis doluptio illatem et aut.
          </p>
          <Link href="/psych-mag">
            <a className="rounded-full bg-pink px-6 py-2 font-headings uppercase text-white md:py-4 md:text-xl lg:text-lg xl:px-10 xl:text-2xl 2xl:text-[29px]">
              Read the mag
            </a>
          </Link>
        </div>
        <div className="mt-5 grid gap-5 md:mt-7 md:grid-cols-2 md:gap-7">
          {fakeData.map((item, i) => {
            return <Card key={i} data={item} withAnchor />
          })}
        </div>
      </div>
    </section>
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
    sectionAnchor: '/psych-mag/#features',
  },
  {
    title: 'the deep blue bag',
    description: 'Great everyday bag that you can feel good about using',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/2.png',
    sectionAnchor: '/psych-mag/#gear',
  },
  {
    title: '5 all female surf films you need to watch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/3.png',
    sectionAnchor: '/psych-mag/#features',
  },
  {
    title: 'top 5 eco-friendly wetsuits',
    description: 'Great everyday bag that you can feel good about using',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/4.png',
    sectionAnchor: '/psych-mag/#gear',
  },
  {
    title: 'best presents for surfers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'gear',
    image: '/images/fake-data-images/psych-mag/5.png',
    sectionAnchor: '/psych-mag/#gear',
  },
  {
    title: 'health benefits of surfing',
    description: 'Great everyday bag that you can feel good about using',
    category: 'features',
    image: '/images/fake-data-images/psych-mag/6.png',
    sectionAnchor: '/psych-mag/#features',
  },
]
