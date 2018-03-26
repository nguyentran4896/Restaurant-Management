import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigator from 'lib/Navigator'
import Store from 'lib/Store'
import Header from 'components/header/header.js'
import HomeHeader from 'components/header/home-header.js'
import Footer from 'components/footer/footer.js'
import Homepage from 'components/pages/home.js'
import Menu from 'components/pages/menu.js'
import Event from 'components/pages/event.js'
import Contact from 'components/pages/contact.js'
import Auth from 'components/pages/auth.js'

ReactDOM.render((
  <Provider store={Store}>
    <Router history={Navigator}>
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
    </Router>
  </Provider>
), document.getElementById('website'))
