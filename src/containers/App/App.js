import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
// components
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Slider from 'components/slider/slider';
import Homepage from 'components/pages/homepage/homepage';
import Menu from 'components/pages/menu/menu';
import EventDetail from 'components/pages/event-detail/event-detail';
import Events from 'components/pages/events/events';

// includes
import 'stylesheets/App.min.css'

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">			
					<div className='container-fluid no-padding'>
						<div className='container-fluid no-padding'>
							<Slider />
							<div className="clear"></div>
							<Header />
							<div className="clear"></div>
							<Route exact path='/' component={Homepage} />
							<Route exact path='/menu' component={Menu} />
							<Route exact path='/event-detail' component={EventDetail} />
							<Route exact path='/events' component={Events} />
						</div>
					</div>
			</div>
		</Router>
    );
  }
}

export default App;
