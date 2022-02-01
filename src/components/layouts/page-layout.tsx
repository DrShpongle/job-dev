import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="">
      <Header />
      {children}
      <div style={{transform: 'translate3d(0,0,0)'}}>
        <Partnered />
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
