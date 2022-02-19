import React from 'react'
import {sbEditable} from '@storyblok/storyblok-editable'
import {render} from 'storyblok-rich-text-react-renderer'

const Article = ({blok}: any) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid}>
      <div className="bg-white-half w-full">
        <div className="mx-auto flex max-w-3xl flex-col items-center pt-20 text-center">
          <h1 className="font-serif text-primary text-5xl font-bold tracking-wide">
            {blok.title}
          </h1>
          {/* <p className="text-gray-500 max-w-lg text-lg">{blok.intro}</p>
          <img className="bg-gray-300 my-16 w-full" src={blok.image} /> */}
        </div>
      </div>
      <div className="mx-auto flex max-w-3xl flex-col items-center pt-20 text-center">
        <div className="text-gray-800 drop-cap text-left text-xl leading-relaxed">
          {/* {render(blok.long_text)} */}
        </div>
      </div>
    </div>
  )
}

export default Article
