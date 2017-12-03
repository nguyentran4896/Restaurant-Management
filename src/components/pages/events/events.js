import React, {
	Component
} from 'react';

import 'stylesheets/events.min.css';

class Events extends Component {
	render() {
		return (
			<div className='container-fluid no-padding'>
				<section id="page-title">

					<div className="container clearfix">
						<h1>Promotions</h1>
						<span>Enjoy our best services with discounts!</span>
						<ol className="breadcrumb">
							<li><a href="#">Home</a></li>
							<li className="active">Events</li>
						</ol>
					</div>

				</section>

				<section id="content">

					<div className="content-wrap">

						<div id="events" className="single-event header-stick footer-stick clearfix">

							<div className="event entry-image parallax nobottommargin" style={{backgroundImage: 'url(' + require('images/restaurant/8.jpg')+')', 'height':'600px'}} data-stellar-background-ratio="0.3">
								<div className="entry-overlay-meta">
									<h2><a href="#">Two beers, one count</a></h2>
									<ul className="iconlist">
										<li><i className="icon-calendar3"></i> <strong>Date:</strong> 15th December, 2017</li>
										<li><i className="icon-time"></i> <strong>Timing:</strong> 20:00 - 02:00</li>
										{/* <li><i className="icon-map-marker2"></i> <strong>Location:</strong> Ibiza, Spain</li> */}
										<li><i className="icon-euro"></i> <strong>9.99</strong></li>
										<li> <strong>Enjoy your beers with friends, two beers one count. Maximum first 10 beers applied!</strong></li>
										<li> <strong>Is it enough for you to get high. Take the vouncher and prepare your money. We will wait for you!</strong></li>
									</ul>
									<a href="#" className="btn btn-danger btn-block btn-lg">Get Vounchers</a>
								</div>
								<div className="entry-overlay">
									<div id="event-countdown1" className="countdown"></div>
								</div>
							</div>

							<div className="event entry-image parallax overlay-left nobottommargin" style={{backgroundImage: 'url(' + require('images/restaurant/1.jpg')+')', 'height':'600px'}} data-stellar-background-ratio="0.3">
								<div className="entry-overlay-meta">
									<h2><a href="#">Bigger size, smaller pay!</a></h2>
									<ul className="iconlist">
										<li><i className="icon-calendar3"></i> <strong>From:</strong> 3rd December, 2017</li>
										<li><i className="icon-time"></i> <strong>Timing:</strong> 18:00 - 21:00</li>
										{/* <li><i className="icon-map-marker2"></i> <strong>Location:</strong> Melbourne, Australia</li> */}
										<li><i className="icon-euro"></i> <strong>19.99</strong></li>
										<li><strong>What are you waiting for? Order now to get this best change ever! Make sure you don't miss it!!!</strong></li>
									</ul>
									<a href="#" className="btn btn-danger btn-block btn-lg">Order now</a>
								</div>
								<div className="entry-overlay">
									<div id="event-countdown2" className="countdown"></div>
								</div>
							</div>

							<div className="event entry-image parallax nobottommargin" style={{backgroundImage: 'url(' + require('images/restaurant/5.jpg')+')', 'height':'600px'}} data-stellar-background-ratio="0.3">
								<div className="entry-overlay-meta">
									<h2><a href="#"> French Wine</a></h2>
									<ul className="iconlist">
										<li><i className="icon-calendar3"></i> <strong>From:</strong> 31st August, 2017</li>
										<li><i className="icon-time"></i> <strong>Timing:</strong> 16:00 - 22:00</li>
										{/* <li><i className="icon-map-marker2"></i> <strong>Location:</strong> London, UK</li> */}
										<li><i className="icon-user4"></i> <strong>Limit:</strong> 2 people</li>
										<li> <strong>Make your dating more romantic. Let's book now, table limited and will be over soon!!!</strong> </li>
									</ul>
									<a href="#" className="btn btn-info btn-block btn-lg">Book Now</a>
								</div>
								<div className="entry-overlay">
									<div id="event-countdown3" className="countdown"></div>
								</div>
							</div>

						</div>

					</div>

				</section>
			</div>
		);
	}
}
export default Events;