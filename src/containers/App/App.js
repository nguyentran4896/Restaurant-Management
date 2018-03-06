import React, { Component } from 'react'
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

class App extends Component {
  componentDidMount () {
    $('.navicon').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('navicon--active')
      $('.toggle').toggleClass('toggle--active')
    })
  }
  render () {
    console.log()
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' component={HomeHeader} exact />
            <Route path='*' component={Header} />
          </Switch>

          <Route exact path='/' component={Homepage} />
          <Route exact path='/menu' component={Menu} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
