import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// components
import Header from 'components/header/header'
import Footer from 'components/footer/footer'
import Sidebar from 'components/sidebar/sidebar'
import Homepage from 'components/pages/homepage/homepage'
import Menu from 'components/pages/menu/menu'
import EventDetail from 'components/pages/event-detail/event-detail'
import Events from 'components/pages/events/events'
import TableBoard from 'components/pages/table-board/table-board'

// includes
import 'stylesheets/App.min.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <div className='container-fluid no-padding'>
            <div className='col-md-3 col-sm-3 col-lg-2'>
              <Sidebar />
            </div>
            <div className='col-md-9 col-sm-9 col-lg-10 no-padding'>
              <Header />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/event-detail' component={EventDetail} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/table-board' component={TableBoard} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
