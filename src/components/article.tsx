import React from 'react'
import Image from 'next/image'
import {sbEditable} from '@storyblok/storyblok-editable'
import {render} from 'storyblok-rich-text-react-renderer'

import PageLayout from 'components/layouts/page-layout'

const Article = ({blok}: any) => {
  return (
    <PageLayout>
      <section {...sbEditable(blok)} key={blok._uid}>
        <div className="relative flex h-[65vh] flex-col justify-end pb-10 md:pb-20 lg:h-screen lg:pb-20 xl:pb-24 2xl:pb-28">
          <div className="absolute inset-0">
            <Image
              layout="fill"
              className="object-cover object-center"
              src={blok.hero_image.filename}
              alt={blok.title}
            />
          </div>
          <div className="container">
            <h2 className="relative text-5xl leading-none text-white md:max-w-xl md:text-6xl lg:max-w-3xl lg:text-7xl xl:max-w-4xl xl:text-8xl 2xl:max-w-5xl 2xl:text-[111px]">
              {blok.title}
            </h2>
          </div>
        </div>
        <div className="bg-blue py-8 text-white md:py-10 md:text-xl lg:py-12 lg:text-4xl xl:py-16 2xl:py-20">
          <div className="container">
            <div className="max-w-6xl">{blok.description}</div>
          </div>
        </div>
        <div className="container">
          <div className="prose-sm max-w-none py-8 md:prose md:max-w-none md:columns-2 md:gap-8 md:py-10 lg:prose-lg lg:max-w-none lg:gap-12 lg:py-12 xl:prose-xl xl:max-w-none xl:columns-3 xl:gap-16 xl:py-16 2xl:prose-2xl 2xl:max-w-none 2xl:gap-20 2xl:py-20">
            {render(blok.content)}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Article
