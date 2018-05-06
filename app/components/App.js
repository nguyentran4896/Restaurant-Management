import React from 'react'
import Header from 'components/header/header.js'
import Footer from 'components/footer/footer.js'
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = (props) => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
      <MessengerCustomerChat
        pageId="175436743280249"
        appId="2092092621060507"
        debug={true}
        // htmlRef="<REF_STRING>"
      />
      <Footer />
    </div>
  )
}
export default Layout