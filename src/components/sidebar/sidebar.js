import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'stylesheets/sidebar.min.css'

class Sidebar extends Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-fixed-side'>
        <div className='container'>
          <div className='navbar-header'>
            <button className='navbar-toggle' data-target='.navbar-collapse' data-toggle='collapse'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link className='navbar-brand header-text' to='/'>
              {/* <img id='logo-img' src={require('images/logo.jpg')} alt='' /> */}
              BK-Food
            </Link>
          </div>
          <div className='navbar-collapse collapse' aria-expanded='false'>
            <ul className='nav navbar-nav'>
              <li>
                <input className='form-control' type='text' placeholder='Search' />
              </li>
              <li>
                <Link to='/events'> KHUYẾN MÃI</Link>
              </li>
              <li>
                <a href='#'>MÓN ĐANG GIẢM GIÁ</a>
              </li>
              <li>
                <a href='#'>ORDER</a>
              </li>
              <li>
                <a role='button' data-toggle='collapse' data-parent='#accordion' href='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                  DANH MỤC
                </a>
                <div id='collapseOne' className='panel-collapse collapse' role='tabpanel' aria-labelledby='headingOne'>
                  <ul className='collapse-ul'>
                    <li>
                      <Link to='/menu'> HẢI SẢN</Link>
                    </li>
                    <li>
                      <Link to='/menu'> ĐỒ UỐNG</Link>
                    </li>
                    <li>
                      <Link to='/menu'> ĐỒ NƯỚNG</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to='/table-board'> SƠ ĐỒ BÀN ĂN</Link>
              </li>
              <li>
                <a href='#'>ĐẶT BÀN</a>
              </li>
              <li>
                <a href='#'>FEEDBACK</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Sidebar
