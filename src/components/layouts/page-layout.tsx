import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/partnered'

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <div className="mt-24 mb-16">
        <div className="container">
          <Partnered />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
