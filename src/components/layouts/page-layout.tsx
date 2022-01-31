import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="">
      <Header />
      <div className="relative z-[1]">{children}</div>
      <div className="relative z-10">
        <Partnered />
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
