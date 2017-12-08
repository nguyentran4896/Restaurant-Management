import React, { Component } from 'react'

import 'stylesheets/events.min.css'

class Events extends Component {
  render () {
    return (
      <div className='container-fluid no-padding'>
        <section id='page-title'>

          <div className='container clearfix'>
            <h1>Khuyến mãi</h1>
            <span>Tận hưởng dịch vụ tốt nhất với khuyến mãi hấp dẫn!</span>
            <ol className='breadcrumb' />
          </div>

        </section>

        <section id='content'>

          <div className='content-wrap'>

            <div id='events' className='single-event header-stick footer-stick clearfix'>

              <div className='event entry-image parallax nobottommargin' style={{ backgroundImage: 'url(' + require('images/restaurant/8.jpg') + ')', 'height': '600px' }} data-stellar-background-ratio='0.3'>
                <div className='entry-overlay-meta'>
                  <h2><a href='#'>Giờ vàng, giá tốt!</a></h2>
                  <ul className='iconlist'>
                    <li><i className='icon-calendar3' /> <strong>Thời gian:</strong> 15/12/2017 - 20/12/2017</li>
                    <li><i className='icon-time' /> <strong>Giờ:</strong> 20:00 - 21:00</li>
                    {/* <li><i className="icon-map-marker2"></i> <strong>Location:</strong> Ibiza, Spain</li> */}
                    <li><i className='icon-dollar' /> <strong>Giảm:</strong> 10% cho tổng hóa đơn</li>
                    <li> Thưởng thức tất cả các món ăn với discount hấp dẫn. Chỉ dành cho khung giờ 20:00 - 21:00. Không áp dụng chung với khuyến mãi khác! </li>
                    <li> <strong>Mỗi thành viên được sử dụng tối đa 1 vouncher trong suốt chương trình.</strong></li>
                  </ul>
                  <a href='#' className='btn btn-danger btn-block btn-lg'>Nhận Vouncher</a>
                </div>
                <div className='entry-overlay'>
                  <div id='event-countdown1' className='countdown' />
                </div>
              </div>

              <div className='event entry-image parallax overlay-left nobottommargin' style={{ backgroundImage: 'url(' + require('images/restaurant/1.jpg') + ')', 'height': '600px' }} data-stellar-background-ratio='0.3'>
                <div className='entry-overlay-meta'>
                  <h2><a href='#'>Size to, giá nhỏ!</a></h2>
                  <ul className='iconlist'>
                    <li><i className='icon-calendar3' /> <strong>Thời gian:</strong> từ 31/12/2017</li>
                    <li><i className='icon-time' /> <strong>Giờ:</strong> 10:00 - 11:00</li>
                    {/* <li><i className="icon-map-marker2"></i> <strong>Location:</strong> Melbourne, Australia</li> */}
                    <li><i className='icon-dollar' /> <strong>Giá:</strong> 190.000VND - 590.000VND</li>
                    <li>Lợn nướng Hungary đồng giá cho mọi size! Áp dụng cho khách hàng có tài khoản thành viên!</li>
                  </ul>
                  <a href='#' className='btn btn-danger btn-block btn-lg'>Đặt hàng ngay</a>
                </div>
                <div className='entry-overlay'>
                  <div id='event-countdown2' className='countdown' />
                </div>
              </div>

              <div className='event entry-image parallax nobottommargin' style={{ backgroundImage: 'url(' + require('images/restaurant/5.jpg') + ')', 'height': '600px' }} data-stellar-background-ratio='0.3'>
                <div className='entry-overlay-meta'>
                  <h2><a href='#'> French Time</a></h2>
                  <ul className='iconlist'>
                    <li><i className='icon-calendar3' /> <strong>Thời gian:</strong> 31/12/2017</li>
                    <li><i className='icon-time' /> <strong>Giờ:</strong> cả ngày</li>
                    {/* <li><i className="icon-map-marker2"></i> <strong>Location:</strong> London, UK</li> */}
                    <li><i className='icon-user4' /> <strong>Giới hạn:</strong> bàn 2 người</li>
                    <li> Tận hưởng bữa tối kiểu Pháp với rượu vang và các món ăn hấp dẫn đến từ Paris! <br />Miễn phí 1 rượu vang cho bàn 2 người! </li>
                    <li> <strong>Số lượng có hạn!</strong></li>
                  </ul>
                  <a href='#' className='btn btn-info btn-block btn-lg'>Đặt bàn ngay</a>
                </div>
                <div className='entry-overlay'>
                  <div id='event-countdown3' className='countdown' />
                </div>
              </div>

            </div>

          </div>

        </section>
      </div>
    )
  }
}
export default Events
