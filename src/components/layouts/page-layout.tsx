import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="">
      <Header />
      {children}
      <div className="relative z-10 bg-white">
        <Partnered />
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
