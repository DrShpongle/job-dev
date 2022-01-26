import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="">
      <Header />
      {children}
      <div className="relative z-10 py-8 bg-white md:py-16 xl:mt-24 xl:mb-16">
        <div className="container">
          <Partnered />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
