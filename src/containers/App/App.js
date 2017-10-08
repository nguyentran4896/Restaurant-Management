import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
// components
import Header from 'components/headerComponent/header';
import Footer from 'components/footerComponent/footer';
import Homepage from 'components/pages/homepage';
import OtherPage from 'components/pages/otherPage';

// includes
import 'containers/App/App.css'

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">

				<Header />
				
					<Route exact path='/' component={Homepage} />
					<Route exact path='/otherPage' component={OtherPage} />

				<Footer />

			</div>
		</Router>
    );
  }
}

export default App;
