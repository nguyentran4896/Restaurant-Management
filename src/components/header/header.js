import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import 'stylesheets/header.min.css'

class Header extends Component {
  render () {
    return (
      <header id='header'>
        <div id='header-wrap'>
          <div className='container clearfix'>
            <div id='primary-menu-trigger'><i className='icon-reorder' /></div>
            {/* <!-- Logo */}
            <div id='logo'>
              <a href='#' className='standard-logo' data-dark-logo={require('images/logo-resto.png')}>
                <img src={require('images/logo-resto.png')} alt='Canvas Logo' />
              </a>
              <a href='#' className='retina-logo' data-dark-logo={require('images/logo-resto.png')}>
                <img src={require('images/logo@2x.png')} alt='Canvas Logo' />
              </a>
            </div>

            {/* <!-- Primary Navigation */}
            <nav id='primary-menu' className='style-5'>

              <ul className='norightborder norightpadding norightmargin'>
                <li className='current'><Link to='/'><div><i className='fa fa-cutlery' aria-hidden='true' />Home</div></Link>
                  <ul>
                    <li><a href='#'><div>Home - Corporate</div></a>
                      <ul>
                        <li><a href='#'><div>Corporate - Layout 1</div></a></li>
                        <li><a href='#'><div>Corporate - Layout 2</div></a></li>
                        <li><a href='#'><div>Corporate - Layout 3</div></a></li>
                        <li><a href='#'><div>Corporate - Layout 4</div></a></li>
                      </ul>
                    </li>
                    <li><a href='index-portfolio.html'><div>Home - Portfolio</div></a>
                      <ul>
                        <li><a href='index-portfolio.html'><div>Portfolio - Layout 1</div></a></li>
                        <li><a href='index-portfolio-2.html'><div>Portfolio - Layout 2</div></a></li>
                        <li><a href='index-portfolio-3.html'><div>Portfolio - Masonry</div></a></li>
                        <li><a href='index-portfolio-4.html'><div>Portfolio - AJAX</div></a></li>
                      </ul>
                    </li>
                    <li><a href='index-blog.html'><div>Home - Blog</div></a>
                      <ul>
                        <li><a href='index-blog.html'><div>Blog - Layout 1</div></a></li>
                        <li><a href='index-blog-2.html'><div>Blog - Layout 2</div></a></li>
                        <li><a href='index-blog-3.html'><div>Blog - Layout 3</div></a></li>
                      </ul>
                    </li>
                    <li><a href='index-shop.html'><div>Home - Shop</div></a>
                      <ul>
                        <li><a href='index-shop.html'><div>Shop - Layout 1</div></a></li>
                        <li><a href='index-shop-2.html'><div>Shop - Layout 2</div></a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link to='/menu'><div><i className='fa fa-navicon' aria-hidden='true' />Menu</div></Link></li>
                <li><Link to='/events'><div><i className='fa fa-shopping-cart' aria-hidden='true' />Events</div></Link></li>
                <li><Link to='/table-board'><div><i className='fa fa-cogs' aria-hidden='true' />Table board</div></Link></li>
                <li><a href='#'><div><i className='icon-pencil2' />Blog</div></a></li>
                <li><a href='#'><div><i className='icon-map-marker2' />Contact</div></a></li>
                <li><a href='#'><div><i className='icon-th' />Demos</div></a></li>
              </ul>

            </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
