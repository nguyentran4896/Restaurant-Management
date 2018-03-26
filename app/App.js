import React, { Component } from 'react'

import SideBar from 'components/layout/SideBar'
import { ToastContainer } from 'react-toastify'
import Transition from 'react-transition-group/Transition'
import '../public/lib/css/animate.min.css'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import $ from 'jquery'

// components
import Header from 'components/header/header.js'
import HomeHeader from 'components/header/home-header.js'
import Footer from 'components/footer/footer.js'
import Homepage from 'components/pages/home.js'
import Menu from 'components/pages/menu.js'
import Event from 'components/pages/event.js'
import Contact from 'components/pages/contact.js'
import Auth from 'components/pages/auth.js'

// class App extends Component {
//   componentDidMount () {
//     $('.navicon').on('click', function (e) {
//       e.preventDefault()
//       $(this).toggleClass('navicon--active')
//       $('.toggle').toggleClass('toggle--active')
//     })
//   }
// }

const ZoomInAndOut = ({ children, position, ...props }) => (
  <Transition
    {...props}
    timeout={800}
    onEnter={node => node.classList.add('zoomIn', 'animate')}
    onExit={node => {
      node.classList.remove('zoomIn', 'animate')
      node.classList.add('zoomOut', 'animate')
    }}
  >
    {children}
  </Transition>
)

const App = (props) => {
  const { children } = props
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' component={HomeHeader} exact />
          <Route path='*' component={Header} />
        </Switch>

        <Route exact path='/' component={Homepage} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/event' component={Event} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/auth' component={Auth} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
