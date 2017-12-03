import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'stylesheets/menu.min.css'

class Menu extends Component {
  render () {
    return (
      <section id='content'>
        <div className='content-wrap nopadding'>
          <div id='portfolio' className='portfolio grid-container portfolio-3 portfolio-full portfolio-nomargin portfolio-notitle clearfix' >
            <article className='portfolio-item pf-media pf-icons'>
              <div className='portfolio-image'>
                <a href='portfolio-single.html'>
                  <img src={require('images/restaurant/food-1.jpg')} alt='Open Imagination' />
                </a>
                <div className='portfolio-overlay'>
                  <a href={require('images/restaurant/food-1.jpg')} className='left-icon' data-lightbox='image'><i className='icon-line-plus' /></a>
                  <a href='portfolio-single.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single.html'>Italian Food</a></h3>
                <span><a href='#'>Best option for people need a huge lunch!</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-illustrations'>
              <div className='portfolio-image'>
                <a href='portfolio-single.html'>
                  <img src={require('images/restaurant/food-2.jpg')} alt='Locked Steel Gate' />
                </a>
                <div className='portfolio-overlay'>
                  <a href={require('images/restaurant/food-2.jpg')} className='left-icon' data-lightbox='image'><i className='icon-line-plus' /></a>
                  <a href='portfolio-single.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single.html'>Cha gio</a></h3>
                <span><a href='#'>One of favorites Vietnameses fastfood</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-graphics pf-uielements'>
              <div className='portfolio-image'>
                <a href='#'>
                  <img src={require('images/restaurant/food-3.jpg')} alt='Mac Sunglasses' />
                </a>
                <div className='portfolio-overlay'>
                  <a href='http://vimeo.com/89396394' className='left-icon' data-lightbox='iframe'><i className='icon-line-play' /></a>
                  <a href='portfolio-single-video.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-video.html'>Japanese Kimbo</a></h3>
                <span><a href='#'>Graphics</a>, <a href='#'>Street foot come from Tokyo</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-icons pf-illustrations'>
              <div className='portfolio-image'>
                <div className='fslider' data-arrows='false' data-speed='400' data-pause='4000'>
                  <div className='flexslider'>
                    <div className='slider-wrap'>
                      <div className='slide'>
                        <a href='portfolio-single-gallery.html'>
                          <img src={require('images/restaurant/food-4.jpg')} alt='Morning Dew' />
                        </a>
                      </div>
                      <div className='slide'>
                        <a href='portfolio-single-gallery.html'>
                          <img src={require('images/restaurant/food-5.jpg')} alt='Morning Dew' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='portfolio-overlay' data-lightbox='gallery'>
                  <a href={require('images/restaurant/food-4.jpg')} className='left-icon' data-lightbox='gallery-item'><i className='icon-line-stack-2' /></a>
                  <a href={require('images/restaurant/food-5.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href='portfolio-single-gallery.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-gallery.html'>Spagheti</a></h3>
                <span><a href='#'>Icons</a>, <a href='#'>Famous noodle come from Italy</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-uielements pf-media'>
              <div className='portfolio-image'>
                <a href='portfolio-single.html'>
                  <img src={require('images/restaurant/food-6.jpg')} alt='Console Activity' />
                </a>
                <div className='portfolio-overlay'>
                  <a href={require('images/restaurant/food-6.jpg')} className='left-icon' data-lightbox='image'><i className='icon-line-plus' /></a>
                  <a href='portfolio-single.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single.html'>Weird food</a></h3>
                <span><a href='#'>I don't know what is is!</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-graphics pf-illustrations'>
              <div className='portfolio-image'>
                <div className='fslider' data-arrows='false' data-animation='fade'>
                  <div className='flexslider'>
                    <div className='slider-wrap'>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-7.jpg')} alt='Shake It' /></a></div>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-8.jpg')} alt='Shake It' /></a></div>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-9.jpg')} alt='Shake It' /></a></div>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-10.jpg')} alt='Shake It' /></a></div>
                    </div>
                  </div>
                </div>
                <div className='portfolio-overlay' data-lightbox='gallery'>
                  <a href={require('images/restaurant/food-7.jpg')} className='left-icon' data-lightbox='gallery-item'><i className='icon-line-stack-2' /></a>
                  <a href={require('images/restaurant/food-8.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href={require('images/restaurant/food-9.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href={require('images/restaurant/food-10.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href='portfolio-single-gallery.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-gallery.html'>Shake It!</a></h3>
                <span><a href='#'>Illustrations</a>, <a href='#'>Graphics</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-uielements pf-icons'>
              <div className='portfolio-image'>
                <a href='portfolio-single-video.html'>
                  <img src={require('images/restaurant/food-7.jpg')} alt='Backpack Contents' />
                </a>
                <div className='portfolio-overlay'>
                  <a href='http://www.youtube.com/watch?v=kuceVNBTJio' className='left-icon' data-lightbox='iframe'><i className='icon-line-play' /></a>
                  <a href='portfolio-single-video.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-video.html'>Backpack Contents</a></h3>
                <span><a href='#'>UI Elements</a>, <a href='#'>Icons</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-illustrations pf-icons'>
              <div className='portfolio-image'>
                <div className='fslider' data-arrows='false' data-speed='650' data-pause='3500' data-animation='fade'>
                  <div className='flexslider'>
                    <div className='slider-wrap'>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-15.jpg')} alt='Bridge Side' /></a></div>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-14.jpg')} alt='Bridge Side' /></a></div>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-13.jpg')} alt='Bridge Side' /></a></div>
                    </div>
                  </div>
                </div>
                <div className='portfolio-overlay' data-lightbox='gallery'>
                  <a href={require('images/restaurant/food-15.jpg')} className='left-icon' data-lightbox='gallery-item'><i className='icon-line-stack-2' /></a>
                  <a href={require('images/restaurant/food-14.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href={require('images/restaurant/food-13.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href='portfolio-single-gallery.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single.html'>Bridge Side</a></h3>
                <span><a href='#'>Illustrations</a>, <a href='#'>Icons</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-graphics pf-media pf-uielements'>
              <div className='portfolio-image'>
                <a href='portfolio-single-video.html'>
                  <img src={require('images/restaurant/food-10.jpg')} alt='Study Table' />
                </a>
                <div className='portfolio-overlay'>
                  <a href='http://vimeo.com/91973305' className='left-icon' data-lightbox='iframe'><i className='icon-line-play' /></a>
                  <a href='portfolio-single-video.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-video.html'>Study Table</a></h3>
                <span><a href='#'>Graphics</a>, <a href='#'>Media</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-icons pf-illustrations'>
              <div className='portfolio-image'>
                <div className='fslider' data-arrows='false' data-speed='400' data-pause='4000'>
                  <div className='flexslider'>
                    <div className='slider-wrap'>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-4.jpg')} alt='Morning Dew' /></a></div>
                      <div className='slide'><a href='portfolio-single-gallery.html'><img src={require('images/restaurant/food-8.jpg')} alt='Morning Dew' /></a></div>
                    </div>
                  </div>
                </div>
                <div className='portfolio-overlay' data-lightbox='gallery'>
                  <a href={require('images/restaurant/food-4.jpg')} className='left-icon' data-lightbox='gallery-item'><i className='icon-line-stack-2' /></a>
                  <a href={require('images/restaurant/food-8.jpg')} className='hidden' data-lightbox='gallery-item' />
                  <a href='portfolio-single-gallery.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-gallery.html'>Morning Dew</a></h3>
                <span><a href='#'>Icons</a>, <a href='#'>Illustrations</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-illustrations'>
              <div className='portfolio-image'>
                <a href='portfolio-single.html'>
                  <img src={require('images/restaurant/food-2.jpg')} alt='Locked Steel Gate' />
                </a>
                <div className='portfolio-overlay'>
                  <a href={require('images/restaurant/food-2.jpg')} className='left-icon' data-lightbox='image'><i className='icon-line-plus' /></a>
                  <a href='portfolio-single.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single.html'>Cha gio again</a></h3>
                <span><a href='#'>One of favorites Vietnameses food</a></span>
              </div>
            </article>

            <article className='portfolio-item pf-graphics pf-uielements'>
              <div className='portfolio-image'>
                <a href='#'>
                  <img src={require('images/restaurant/food-3.jpg')} alt='Mac Sunglasses' />
                </a>
                <div className='portfolio-overlay'>
                  <a href='http://vimeo.com/89396394' className='left-icon' data-lightbox='iframe'><i className='icon-line-play' /></a>
                  <a href='portfolio-single-video.html' className='right-icon'><i className='icon-line-ellipsis' /></a>
                </div>
              </div>
              <div className='portfolio-desc'>
                <h3><a href='portfolio-single-video.html'>Mac Sunglasses</a></h3>
                <span><a href='#'>Graphics</a>, <a href='#'>UI Elements</a></span>
              </div>
            </article>

          </div>

          <Link to='/events' className='button button-full center button-light button-white'>
            <div className='container clearfix'>
              Getting confused? <strong>Show the recommended</strong> <i className='icon-caret-right' style={{'top': '4px'}} />
            </div>
          </Link>

        </div>
      </section>
    )
  }
}
export default Menu
