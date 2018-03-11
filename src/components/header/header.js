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
      <div className='header head'>
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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/event'>Events</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className='clearfix' />
        </div>
      </div>
    )
  }
}

export default Header
