import React from 'react'
import Image from 'next/image'
import {sbEditable} from '@storyblok/storyblok-editable'
import {render} from 'storyblok-rich-text-react-renderer'

import PageLayout from 'components/layouts/page-layout'

const Article = ({blok}: any) => {
  return (
    <PageLayout>
      <section {...sbEditable(blok)} key={blok._uid}>
        <div className="relative flex h-screen flex-col justify-end px-44 py-28">
          <div className="absolute inset-0">
            <Image
              layout="fill"
              className="object-cover object-center"
              src={blok.hero_image.filename}
              alt={blok.title}
            />
          </div>
          <h2 className="relative text-5xl leading-none text-white md:text-6xl lg:max-w-md lg:text-7xl xl:max-w-lg xl:text-8xl 2xl:max-w-4xl 2xl:text-[111px]">
            {blok.title}
          </h2>
        </div>
        <div className="bg-blue px-44 py-28 text-4xl text-white">
          <div className="max-w-6xl">{blok.description}</div>
        </div>
        <div className="prose max-w-none columns-2 gap-32 px-44 py-28">
          {render(blok.content)}
        </div>
      </section>
    </PageLayout>
  )
}

export default Article
