import React from 'react'
import Image from 'next/image'
import {sbEditable} from '@storyblok/storyblok-editable'
import {render} from 'storyblok-rich-text-react-renderer'

import PageLayout from 'components/layouts/page-layout'

const Article = ({blok}: any) => {
  return (
    <PageLayout>
      <section {...sbEditable(blok)} key={blok._uid}>
        <div className="relative flex h-[65vh] flex-col justify-end px-6 pb-10 md:pl-16 md:pb-20 lg:h-screen lg:pl-28 lg:pb-20 xl:pl-36 xl:pb-24 2xl:pl-44 2xl:pb-28">
          <div className="absolute inset-0">
            <Image
              layout="fill"
              className="object-cover object-center"
              src={blok.hero_image.filename}
              alt={blok.title}
            />
          </div>
          <h2 className="relative text-5xl leading-none text-white md:max-w-xl md:text-6xl lg:max-w-3xl lg:text-7xl xl:ml-36 xl:mb-24 xl:max-w-4xl xl:text-8xl 2xl:max-w-5xl 2xl:text-[111px]">
            {blok.title}
          </h2>
        </div>
        <div className="bg-blue px-6 py-8 text-white md:pl-16 md:text-xl lg:text-4xl 2xl:px-44 2xl:py-28">
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
