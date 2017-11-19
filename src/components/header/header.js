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
                    <li><a href='index-magazine.html'><div>Home - Magazine</div></a>
                      <ul>
                        <li><a href='index-magazine.html'><div>Magazine - Layout 1</div></a></li>
                        <li><a href='index-magazine-2.html'><div>Magazine - Layout 2</div></a></li>
                        <li><a href='index-magazine-3.html'><div>Magazine - Layout 3</div></a></li>
                      </ul>
                    </li>
                    <li><a href='landing.html'><div>Home - Landing Page</div></a>
                      <ul>
                        <li><a href='landing.html'><div>Landing Page - Layout 1</div></a></li>
                        <li><a href='landing-2.html'><div>Landing Page - Layout 2</div></a></li>
                        <li><a href='landing-3.html'><div>Landing Page - Layout 3</div></a></li>
                        <li><a href='landing-4.html'><div>Landing Page - Layout 4</div></a></li>
                        <li><a href='landing-5.html'><div>Landing Page - Layout 5</div></a></li>
                      </ul>
                    </li>
                    <li><a href='index-fullscreen-image.html'><div>Home - Full Screen</div></a>
                      <ul>
                        <li><a href='index-fullscreen-image.html'><div>Full Screen - Image</div></a></li>
                        <li><a href='index-fullscreen-slider.html'><div>Full Screen - Slider</div></a></li>
                        <li><a href='index-fullscreen-video.html'><div>Full Screen - Video</div></a></li>
                      </ul>
                    </li>
                    <li><a href='index-onepage.html'><div>Home - One Page</div></a>
                      <ul>
                        <li><a href='index-onepage.html'><div>One Page - Default</div></a></li>
                        <li><a href='index-onepage-2.html'><div>One Page - Submenu</div></a></li>
                        <li><a href='index-onepage-3.html'><div>One Page - Dots Style</div></a></li>
                      </ul>
                    </li>
                    <li><a href='index-wedding.html'><div>Home - Wedding</div></a></li>
                    <li><a href='index-restaurant.html'><div>Home - Restaurant</div></a></li>
                    <li><a href='index-events.html'><div>Home - Events</div></a></li>
                    <li><a href='index-parallax.html'><div>Home - Parallax</div></a></li>
                    <li><a href='index-app-showcase.html'><div>Home - App Showcase</div></a></li>
                  </ul>
                </li>
                <li><Link to='/menu'><div><i className='fa fa-navicon' aria-hidden='true' />Menu</div></Link></li>
                <li><Link to='/event-detail'><div><i className='fa fa-star' aria-hidden='true' />Event detail</div></Link></li>
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
