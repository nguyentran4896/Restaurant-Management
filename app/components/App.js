import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky'
import Header from 'components/header/header.js'
import Footer from 'components/footer/footer.js'

const Layout = (props) => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default Layout