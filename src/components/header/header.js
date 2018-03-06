import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

// includes
// import 'stylesheets/animate.min.css'
// import 'stylesheets/style.css'

// import 'stylesheets/bootstrap.css'
// import 'stylesheets/component.css'
// import 'stylesheets/styles.css'

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
      <div className='header'>
        <div className='container'>
          <div className='logo animated wow pulse' data-wow-duration='1000ms' data-wow-delay='500ms'>
            <h1>
              <a href='index.html'>
                <span>C</span>
                <img src='/lib/images/oo.png' alt='' />
                <img src='/lib/images/oo.png' alt='' />kery</a>
            </h1>
          </div>
          <div className='nav-icon'>
            <a href='#' className='navicon' />
            <div className='toggle'>
              <ul className='toggle-menu'>
                <li>
                  <a className='active' href='index.html'>Home</a>
                </li>
                <li>
                  <a href='menu.html'>Menu</a>
                </li>
                <li>
                  <a href='blog.html'>Blog</a>
                </li>
                <li>
                  <a href='typo.html'>Codes</a>
                </li>
                <li>
                  <a href='events.html'>Events</a>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='clearfix' />
        </div>
        <div className='banner'>
          <p className='animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>Sed ut perspiciatis unde omnis iste natus.</p>
          <label />
          <h4 className='animated wow fadeInTop' data-wow-duration='1000ms' data-wow-delay='500ms'>Hello And Welcome To Food</h4>
          <a className='scroll down' href='#content-down'>
            <img src='/lib/images/down.png' alt='' />
          </a>
        </div>
      </div>
    )
  }
}

export default Header
