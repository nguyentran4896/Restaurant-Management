import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div className='content' id='content-down'>
        <div className='content-top-top'>
          <div className='container'>
            <div className='content-top'>
              <div className='col-md-4 content-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>About</h3>
                <label>
                  <i className='glyphicon glyphicon-menu-up' />
                </label>
                <span>There are many variations</span>
              </div>
              <div className='col-md-8 content-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour , or randomised words which don't look even slightly believable.There are many
              variations by injected humour. There are many variations of passages of Lorem Ipsum available.There are many
              variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by
              injected humour , or randomised words</p>
              </div>
              <div className='clearfix' />
            </div>
            <div className='content-mid'>

              <div className='col-md-4 food-grid animated wow fadeInUp' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' hover-fold'>
                  <h4>FOOD</h4>
                  <div className='top'>
                    <div className='front face' />
                    <div className='back face'>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour</p>
                    </div>
                  </div>
                  <div className='bottom' />
                </div>
              </div>
              <div className='col-md-4 food-grid animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' hover-fold'>
                  <h4>FOOD</h4>
                  <div className='top'>
                    <div className='front face front1' />
                    <div className='back face'>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour</p>
                    </div>
                  </div>
                  <div className='bottom bottom1' />
                </div>
              </div>
              <div className='col-md-4 food-grid animated wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' hover-fold'>
                  <h4>FOOD</h4>
                  <div className='top'>
                    <div className='front face front2' />
                    <div className='back face'>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour</p>
                    </div>
                  </div>
                  <div className='bottom bottom2' />
                </div>
              </div>
              <div className='clearfix' />
            </div>
          </div>
        </div>
        <div className='services'>
          <div className='container'>
            <div className='services-top'>
              <div className='col-md-8 services-right animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour , or randomised words which don't look even slightly believable.There are many
              variations by injected humour. There are many variations of passages of Lorem Ipsum available.There are many
              variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by
              injected humour , or randomised words</p>
              </div>
              <div className='col-md-4 services-left animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>Services</h3>
                <label>
                  <i className='glyphicon glyphicon-menu-up' />
                </label>
                <span>There are many variations</span>
              </div>
              <div className='clearfix' />
            </div>
            <div className='service-top'>
              <div className='col-md-5 service-top animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' service-grid'>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-leaf' />
                    </div>
                  </div>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-star-empty' />
                    </div>
                  </div>
                  <div className='clearfix' />
                </div>
                <div className=' service-grid'>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-folder-open' />
                    </div>
                  </div>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-home' />
                    </div>
                  </div>
                  <div className='clearfix' />
                </div>

              </div>
              <div className='col-md-7 service-bottom animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' service-bottom1'>
                  <div className=' ser-bottom'>
                    <img src='/lib/images/sa.jpg' className='img-responsive' alt='' />
                  </div>
                  <div className='ser-top '>
                    <h5>Beautiful &amp; enjoyable designs</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis.</p>
                  </div>
                  <div className='clearfix' />
                </div>
                <div className=' service-bottom1'>
                  <div className=' ser-bottom'>
                    <img src='/lib/images/sa1.jpg' className='img-responsive' alt='' />
                  </div>
                  <div className='ser-top '>
                    <h5>Beautiful &amp; enjoyable designs</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis.</p>
                  </div>
                  <div className='clearfix' />
                </div>
                <div className=' service-bottom1'>
                  <div className=' ser-bottom'>
                    <img src='/lib/images/sa2.jpg' className='img-responsive' alt='' />
                  </div>
                  <div className='ser-top '>
                    <h5>Beautiful &amp; enjoyable designs</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis.</p>
                  </div>
                  <div className='clearfix' />
                </div>
              </div>
              <div className='clearfix' />
            </div>
          </div>
        </div>
        <div className='content-top-top'>
          <div className='container'>
            <div className='content-top'>
              <div className='col-md-4 content-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>News</h3>
                <label>
                  <i className='glyphicon glyphicon-menu-up' />
                </label>
                <span>There are many variations</span>
              </div>
              <div className='col-md-8 content-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
              some form, by injected humour , or randomised words which don't look even slightly believable.There are many
              variations by injected humour. There are many variations of passages of Lorem Ipsum available.There are many
              variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by
              injected humour , or randomised words</p>
              </div>
              <div className='clearfix' />
            </div>
            <div className='news-bottom'>
              <div className='news-bot'>
                <div className='col-md-6 news-bottom1 animated wow fadeInUp' data-wow-duration='1000ms' data-wow-delay='500ms'>
                  <a href='single.html'>
                    <div className='content-item'>
                      <div className='overlay' />
                      <div className=' news-bottom2'>
                        <ul className='grid-news'>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-calendar' />08.09.2014</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-comment' />5 Comment</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-share' />Share</span>
                          </li>
                        </ul>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col-md-6 news-bottom1 animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                  <a href='single.html'>
                    <div className='content-item content-item1'>
                      <div className='overlay' />
                      <div className=' news-bottom2'>
                        <ul className='grid-news'>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-calendar' />08.09.2014</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-comment' />5 Comment</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-share' />Share</span>
                          </li>
                        </ul>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='clearfix' />
              </div>
              <div className='news-bot'>
                <div className='col-md-6 news-bottom1'>
                  <a href='single.html'>
                    <div className='content-item content-item2 animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                      <div className='overlay' />
                      <div className=' news-bottom2'>
                        <ul className='grid-news'>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-calendar' />08.09.2014</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-comment' />5 Comment</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-share' />Share</span>
                          </li>
                        </ul>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col-md-6 news-bottom1 animated wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='500ms'>
                  <a href='single.html'>
                    <div className='content-item content-item3'>
                      <div className='overlay' />
                      <div className=' news-bottom2'>
                        <ul className='grid-news'>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-calendar' />08.09.2014</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-comment' />5 Comment</span>
                            <b>/</b>
                          </li>
                          <li>
                            <span>
                              <i className='glyphicon glyphicon-share' />Share</span>
                          </li>
                        </ul>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='clearfix' />

                <div className='read-more'>
                  <Link className='link link-yaku' to='event'>
                    <span>X</span>
                    <span>e</span>
                    <span>m</span>
                    <span>&nbsp;</span>
                    <span>t</span> 
                    <span>h</span>
                    <span>ê</span>
                    <span>m</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
