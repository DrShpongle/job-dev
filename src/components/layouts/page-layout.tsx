import * as React from 'react'

import Header from 'components/header'
import Subheader from 'components/subheader'
import SeaTrees from 'components/sections/sea-trees'
import Partnered from 'components/sections/partnered'
import Footer from 'components/footer'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="">
      <Header />
      <Subheader />
      {children}
      <div style={{transform: 'translate3d(0,0,0)'}}>
        <SeaTrees />
        <Partnered />
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout
