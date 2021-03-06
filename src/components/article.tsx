import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import {render} from 'storyblok-rich-text-react-renderer'

import ImageWithBlur from 'components/image-with-blur'
import PageLayout from 'components/layouts/page-layout'
import YoutubeBlock from 'components/youtube-block'

const Article = ({blok}: any) => {
  return (
    <PageLayout>
      <section {...sbEditable(blok)}>
        <div className="relative flex h-[65vh] flex-col justify-end pb-10 md:pb-20 lg:h-screen lg:pb-20 xl:pb-24 2xl:pb-28">
          <div className="absolute inset-0 before:absolute before:inset-0 before:z-[1] before:block before:bg-black/20">
            <ImageWithBlur
              layout="fill"
              className="object-cover object-center"
              src={blok.hero_image.filename}
              alt={blok.title}
            />
          </div>
          <div className="container relative z-10">
            <h1 className="relative text-5xl leading-none text-white md:max-w-xl md:text-6xl lg:max-w-3xl lg:text-7xl xl:max-w-4xl xl:text-8xl 2xl:max-w-5xl 2xl:text-[111px]">
              {blok.title}
            </h1>
          </div>
        </div>
        <div className="bg-blue py-8 text-white md:py-10 md:text-xl lg:py-12 lg:text-4xl xl:py-16 2xl:py-20">
          <div className="container">
            <div className="max-w-6xl">{blok.description}</div>
          </div>
        </div>
        <div className="container">
          <div className="prose-sm max-w-none py-8 md:prose md:max-w-none md:columns-2 md:gap-8 md:py-10 lg:prose-lg lg:max-w-none lg:gap-12 lg:py-12 xl:prose-xl xl:max-w-none xl:columns-3 xl:gap-16 xl:py-16 2xl:prose-2xl 2xl:max-w-none 2xl:gap-20 2xl:py-20">
            {render(blok.content, {
              blokResolvers: {
                ['youtubeBlock']: ({videoLink}) => (
                  <YoutubeBlock videoLink={videoLink} />
                ),
              },
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Article
