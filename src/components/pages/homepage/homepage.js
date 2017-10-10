import React, {
	Component
} from 'react';

import 'stylesheets/homepage.min.css'

class Homepage extends Component {
	render() {
		return (
			<div className='row'>
				<div className='row'>
					<div id='carousel-example-generic' className='carousel slide slide-size' data-ride='carousel'>
						<ol className='carousel-indicators'>
							<li data-target='#carousel-example-generic' data-slide-to='0' className='active'></li>
							<li data-target='#carousel-example-generic' data-slide-to='1'></li>
							<li data-target='#carousel-example-generic' data-slide-to='2'></li>
						</ol>
						<div className='carousel-inner' role='listbox'>
							<div className='item active'>
								<img src={require('images/demo_1.jpg')} alt='error' className='slide-size' />
							</div>
							<div className='item'>
								<img src={require('images/demo_2.jpg')} alt='error' className='slide-size' />
							</div>
							<div className='item'>
								<img src={require('images/demo_3.jpg')} alt='error' className='slide-size' />
							</div>
						</div>
						<a className='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>
							<span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
							<span className='sr-only'>Previous</span>
						</a>
						<a className='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>
							<span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
							<span className='sr-only'>Next</span>
						</a>
					</div>
				</div>
				<div className='row'>
					<a href='#'>
						<div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
							<div className='card main-card'>
								<img src={require('images/demo_4.jpg')} alt='' />
								<p>Lorem Ipsum has been the industry</p>
								<div className='card-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
								</div>
							</div>
						</div>
					</a>
					<a href='#'>
						<div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
							<div className='card main-card'>
								<img src={require('images/demo_4.jpg')} alt='' />
								<p>Lorem Ipsum has been the industry</p>
								<div className='card-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
								</div>
							</div>
						</div>
					</a>
					<a href='#'>
						<div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
							<div className='card main-card'>
								<img src={require('images/demo_4.jpg')} alt='' />
								<p>Lorem Ipsum has been the industry</p>
								<div className='card-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
								</div>
							</div>
						</div>
					</a>
					<a href='#'>
						<div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
							<div className='card main-card'>
								<img src={require('images/demo_4.jpg')} alt='' />
								<p>Lorem Ipsum has been the industry</p>
								<div className='card-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
								</div>
							</div>
						</div>
					</a>
					<a href='#'>
						<div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
							<div className='card main-card'>
								<img src={require('images/demo_4.jpg')} alt='' />
								<p>Lorem Ipsum has been the industry</p>
								<div className='card-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
								</div>
							</div>
						</div>
					</a>
					<a href='#'>
						<div className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
							<div className='card main-card'>
								<img src={require('images/demo_4.jpg')} alt='' />
								<p>Lorem Ipsum has been the industry</p>
								<div className='card-text'>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
export default Homepage;