import React, { Component } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

class Header extends Component {
  componentDidMount () {
    $('.navicon').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('navicon--active')
      $('.toggle').toggleClass('toggle--active')
    })
  }

  render () {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='footer-head'>
            <div className='col-md-8 footer-top animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <ul className=' in'>
                <li>
                  <Link to='/'>Trang chủ</Link>
                </li>
                <li>
                  <Link to='/menu'>Thực đơn</Link>
                </li>
                <li>
                  <Link to='/event'>Tin tức</Link>
                </li>
                <li>
                  <Link to='/contact'>Liên hệ</Link>
                </li>
                <li>
                  <Link to='/auth'>Đăng nhập</Link>
                </li>
              </ul>
              <span>Khách hàng luôn là mục tiêu phục vụ của chúng tôi!</span>
            </div>
            <div className='col-md-4 footer-bottom  animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <h2>Theo dõi</h2>
              <label>
                <i className='glyphicon glyphicon-menu-up' />
              </label>
              <p>Kết nối ngay trên mạng xã hội để không bỏ lỡ nhưng khuyến mãi hấp dẫn nhất</p>
              <ul className='social-ic'>
                <li>
                  <a href='#'>
                    <i />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='ic' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='ic1' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='ic2' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='ic3' />
                  </a>
                </li>
              </ul>

            </div>
            <div className='clearfix' />

          </div>
          <p className='footer-class animated wow bounce' data-wow-duration='1000ms' data-wow-delay='500ms'>&copy; 2016 Cookery . All Rights Reserved | Design by
            <a href='http://w3layouts.com/' target='_blank'>W3layouts</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Header
