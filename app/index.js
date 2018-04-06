import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Transition from 'react-transition-group/Transition'
import { ToastContainer } from 'react-toastify'

import Navigator from 'lib/Navigator'
import Store from 'lib/Store'
import Layout from 'components/App.js'
import Homepage from 'components/pages/home.js'
import Menu from 'components/pages/menu.js'
import Event from 'components/pages/event.js'
import Contact from 'components/pages/contact.js'
import Auth from 'components/pages/auth.js'
import MapTable from 'components/pages/maps/MapTable.js'

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

class App extends React.Component {
  render() {
    return (
      <Provider store={Store} >
        <Router history={Navigator}>
          <div>
            <Layout>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/menu' component={Menu} />
                <Route exact path='/event' component={Event} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/auth' component={Auth} />
                <Route exact path='/map' component={MapTable} />
              </Switch>
            </Layout>
            <ToastContainer transition={ZoomInAndOut} />
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('website'))
