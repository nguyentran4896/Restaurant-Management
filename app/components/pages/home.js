import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getEvents } from 'lib/actions/event'
import { getFoods } from 'lib/actions/food'
import R from 'ramda'
import moment from 'moment'
class Header extends Component {
  componentDidMount() {
    this.props.dispatch(getEvents())
    this.props.dispatch(getFoods())
  }
  render() {
    const { eventState, foodState } = this.props
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

              {foodState.items.map((item, i) => {
                return (
                  <div className='col-md-4 food-grid animated wow fadeInUp'
                    data-wow-duration='1000ms' data-wow-delay='500ms' key={i}>
                    <div className=' hover-fold'>
                      <h4>{item.name.toUpperCase()}</h4>
                      <div className='top'>
                        <div className='front face'
                          style={{ background: 'url(' + R.values(item.imageUrl)[0] + ') top' }}
                        />
                        <div className='back face'>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className='bottom'
                        style={{ background: 'url(' + R.values(item.imageUrl)[0] + ') bottom' }}
                      />
                    </div>
                  </div>
                )
              })}


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
              variations by injected humour. </p>
              </div>
              <div className='clearfix' />
            </div>
            <div className='news-bottom'>
              <div className='news-bot'>
                {eventState.items.map((item, i) => {
                  return (
                    <div className='col-md-6 news-bottom1' key={i}>
                      <a href='single.html'>
                        <div className='content-item content-item2 animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                          <div className='overlay' />
                          <div className=' news-bottom2'>
                            <ul className='grid-news'>
                              <li>
                                <span>
                                  <i className='glyphicon glyphicon-calendar' />{moment.utc(item.start).format('DD-MM-YYYY')}</span>
                                <b>-</b>
                              </li>
                              <li>
                                <span>
                                  <i className='glyphicon glyphicon-calendar' />{moment.utc(item.end).format('DD-MM-YYYY')}</span>
                              </li>
                            </ul>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })}
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

const mapStateToProps = state => ({
  eventState: state.event,
  foodState: state.food
})

export default connect(mapStateToProps)(Header)
