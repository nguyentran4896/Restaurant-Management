import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      <div className='header'>
        <div className='container'>
          <div className='logo animated wow pulse' data-wow-duration='1000ms' data-wow-delay='500ms'>
            <h1>
              <Link to='/'>
                <span>C</span>
                <img src='/lib/images/oo.png' alt='' />
                <img src='/lib/images/oo.png' alt='' />
                kery
              </Link>
            S</h1>
          </div>
          <div className='nav-icon'>
            <a href='#' className='navicon' />
            <div className='toggle'>
              <ul className='toggle-menu'>
                <li><Link to='/' className='active'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/event'>Events</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
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
