import * as React from 'react'

const FeaturedArticle: React.FC<{article: any}> = ({article}) => {
  return (
    <div className="bg-blue py-8 text-white md:py-10 lg:py-12 xl:py-14">
      <div className="container">
        <h1 className="text-center text-5xl leading-none md:text-6xl lg:text-7xl">
          Featured Article goes here...
        </h1>
      </div>
    </div>
  )
}

export default FeaturedArticle
