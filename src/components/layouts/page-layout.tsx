import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'
import FixedLabel from 'components/fixed-label'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="">
      <Header />
      <div className="relative z-[1]">{children}</div>
      <div className="relative z-10">
        <Partnered />
        <Footer />
        <FixedLabel
          title="Maldives"
          subtitleTop="win a trip to the"
          subtitleBottom="with Jamie"
          className="fixed right-0 bottom-6 md:bottom-20"
        />
      </div>
    </div>
  )
}

export default PageLayout
