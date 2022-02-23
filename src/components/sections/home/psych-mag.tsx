import * as React from 'react'
import Link from 'next/link'
import {sbEditable} from '@storyblok/storyblok-editable'
import {isEmpty} from 'lodash'

import {getFeaturedArticles} from 'utils/get-featured-articles'
import Card from 'components/card'

const PsychMag = (props: any) => {
  const {blok} = props
  const [featuredStories, setFeaturedStories] = React.useState<any>(
    [...Array(6).keys()].map(() => {
      return {}
    }),
  )
  React.useEffect(() => {
    getFeaturedArticles(blok.featured_articles).then((data) =>
      setFeaturedStories(data),
    )
  }, [blok.featured_articles])
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
          {!isEmpty(featuredStories) &&
            featuredStories.map((item: any, i: number) => {
              return <Card key={item.uuid || i} data={item} withAnchor />
            })}
        </div>
      </div>
    </section>
  )
}

export default PsychMag
