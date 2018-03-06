import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// components

// includes
// import 'stylesheets/App.min.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <div className='container-fluid no-padding'>
            <div className='container-fluid no-padding' />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
