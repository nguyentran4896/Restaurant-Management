import React, {
	Component
} from 'react';

import 'stylesheets/events.min.css';

class Events extends Component {
	render() {
		return (
			<div className='row'>
				<a href='#'>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<div className='card main-card'>
							<img src={require('images/demo_4.jpg')} alt='' />
							<p>Khuyến mãi 10% nhân dịp trung thu</p>
							<div className='card-text'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
							</div>
						</div>
					</div>
				</a>
				<a href='#'>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<div className='card main-card'>
							<img src={require('images/demo_4.jpg')} alt='' />
							<p>Tặng 1 phần nước miễn phí khi thanh toán bằng thẻ Master Card</p>
							<div className='card-text'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
							</div>
						</div>
					</div>
				</a>
				<a href='#'>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<div className='card main-card'>
							<img src={require('images/demo_4.jpg')} alt='' />
							<p>Mua 1 tặng 3 cho FA</p>
							<div className='card-text'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
							</div>
						</div>
					</div>
				</a>
				<a href='#'>
					<div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
						<div className='card main-card'>
							<img src={require('images/demo_4.jpg')} alt='' />
							<p>Đặt bàn ngay, miễn phí đồ chay</p>
							<div className='card-text'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
							</div>
						</div>
					</div>
				</a>
			</div>
		);
	}
}
export default Events;