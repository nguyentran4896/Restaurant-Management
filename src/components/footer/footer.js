import React, { Component } from 'react'
import $ from 'jquery'

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
                  <a href='index.html'>Home</a>
                </li>
                <li>
                  <a href='menu.html'>Menu</a>
                </li>
                <li>
                  <a href='blog.html'>Blog</a>
                </li>
                <li>
                  <a href='events.html'>Events</a>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
              </ul>
              <span>There are many variations of passages</span>
            </div>
            <div className='col-md-4 footer-bottom  animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <h2>Follow Us</h2>
              <label>
                <i className='glyphicon glyphicon-menu-up' />
              </label>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis.</p>
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
