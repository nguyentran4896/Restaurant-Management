import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import Header from 'components/header/header.js'
import Footer from 'components/footer/footer.js'
import Homepage from 'components/pages/home.js'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route exact path='/' component={Homepage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
