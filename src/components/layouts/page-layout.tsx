import * as React from 'react'

import Header from 'components/app/header'
import Footer from 'components/app/footer'
import Partnered from 'components/sections/partnered'

const handleResize = () => {
  let value = '100vh'
  if (window.innerWidth <= 1366) {
    value = `${window.innerHeight}px`
  }
  document.documentElement.style.setProperty('--real100vh', value)
}

const PageLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    // window.addEventListener('touchmove', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      // window.removeEventListener('touchmove', handleResize)
    }
  }, [])
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <div className="py-8 md:py-16 xl:mt-24 xl:mb-16">
        <div className="container">
          <Partnered />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout
