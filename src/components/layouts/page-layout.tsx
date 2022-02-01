import * as React from 'react'

import Header from 'components/header'
import Footer from 'components/footer'
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
