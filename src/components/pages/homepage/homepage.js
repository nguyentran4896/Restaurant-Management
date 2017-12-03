import React, {
  Component
} from 'react'

import ReactDOM from 'react-dom'

import 'stylesheets/homepage.min.css'
import Slider from '../../slider/slider'

class Homepage extends Component {
  componentDidMount () {
    ReactDOM.render((<Slider />), document.getElementById('slider'))
  }

  render () {
    return (
      <div>
        {/* <Slider /> */}
        <div id='slider' />
        <div className='clear' />
        <section id='content'>
          <div className='content-wrap'>
            <div className='container clearfix'>
              <div className='col_one_third nobottommargin'>
                <div className='feature-box media-box'>
                  <div className='fbox-media'>
                    <img src={require('images/restaurant/thumb/3.jpg')} alt='Why choose Us?' />
                  </div>
                  <div className='fbox-desc'>
                    <h3>Why choose Us.<span className='subtitle'>Because we are Reliable.</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.</p>
                  </div>
                </div>
              </div>

              <div className='col_one_third nobottommargin'>
                <div className='feature-box media-box'>
                  <div className='fbox-media'>
                    <img src={require('images/restaurant/thumb/16.jpg')} alt='Why choose Us?' />
                  </div>
                  <div className='fbox-desc'>
                    <h3>Our Mission.<span className='subtitle'>To Redefine your Brand.</span></h3>
                    <p>Quos, non, esse eligendi ab accusantium voluptatem. Maxime eligendi beatae, atque tempora ullam. Vitae delectus quia, consequuntur rerum molestias quo.</p>
                  </div>
                </div>
              </div>

              <div className='col_one_third nobottommargin col_last'>
                <div className='feature-box media-box'>
                  <div className='fbox-media'>
                    <img src={require('images/restaurant/thumb/12.jpg')} alt='Why choose Us?' />
                  </div>
                  <div className='fbox-desc'>
                    <h3>What we Do.<span className='subtitle'>Make our Customers Happy.</span></h3>
                    <p>Porro repellat vero sapiente amet vitae quibusdam necessitatibus consectetur, labore totam. Accusamus perspiciatis asperiores labore esse ab accusantium ea modi ut.</p>
                  </div>
                </div>
              </div>

              <div className='clear' />

            </div>

            <div className='section dark bottommargin-lg' style={{ 'height': '500px' }}>
              <div className='container center clearfix vertical-middle'>

                <i className='i-plain i-xlarge icon-food2 divcenter bottommargin' />

                <div className='slider-caption slider-caption-center'>
                  <h2 data-animate='fadeInUp'>Brilliant Service</h2>
                  <p data-animate='fadeInUp' data-delay='200'>'Momentum poverty tackling fellows social impact. Expanding community ownership, future affiliate protect civil society. Bloomberg.'</p>
                </div>

              </div>
            </div>

            <div className='container clearfix'>

              <div className='col_one_fourth nobottommargin'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'><img src={require('images/icons/restaurant/glass.png')} alt='Icon' data-animate='zoomIn' /></a>
                  </div>
                  <h3>Exclusive Bar Available<span className='subtitle'>Start getting high</span></h3>
                </div>
              </div>

              <div className='col_one_fourth nobottommargin'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'>
                      <img src={require('images/icons/restaurant/fork.png')} alt='Icon' data-animate='zoomIn' data-delay='200' />
                    </a>
                  </div>
                  <h3>International Food Menu<span className='subtitle'>World Famous Recipes</span></h3>
                </div>
              </div>

              <div className='col_one_fourth nobottommargin'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'><img src={require('images/icons/restaurant/cup.png')} alt='Icon' data-animate='zoomIn' data-delay='400' /></a>
                  </div>
                  <h3>Breakfast Available<span className='subtitle'>Specialized Morning Menus</span></h3>
                </div>
              </div>

              <div className='col_one_fourth nobottommargin col_last'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'><img src={require('images/icons/restaurant/tea.png')} alt='Icon' data-animate='zoomIn' data-delay='600' /></a>
                  </div>
                  <h3>Quiet Cafe Dining<span className='subtitle'>Private &amp; Personalized</span></h3>
                </div>
              </div>

              <div className='clear' />

            </div>

            <div className='section nobg topmargin-lg nobottommargin'>
              <div className='container clearfix'>

                <div className='col_half nobottommargin center'>

                  <img src={require('images/restaurant/20.png')} alt='Image' data-animate='fadeInLeft' />

                </div>

                <div className='col_half nobottommargin col_last'>

                  <div className='heading-block' style={{ 'paddingTop': '40px' }}>

                    <h2>Fresh from the Garden.</h2>
                    <span>Duis mollis, est non commodo luctus. Donec sed odio dui</span>

                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.</p>

                  <a href='#' className='button button-border button-large button-rounded topmargin-sm noleftmargin'>View Recipes</a>

                </div>

              </div>
            </div>

            <div className='section nobg notopmargin noborder bottommargin-sm'>
              <div className='container clearfix'>

                <div className='col_half nobottommargin'>

                  <div className='heading-block' style={{ paddingTop: '40px' }}>

                    <h2>You'll be Lovin' It.</h2>
                    <span>Duis mollis, est non commodo luctus. Donec sed odio dui</span>

                  </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.</p>

                  <a href='#' className='button button-border button-large button-rounded topmargin-sm noleftmargin'>More Details</a>

                </div>

                <div className='col_half bottommargin-sm center col_last'>

                  <img src={require('images/restaurant/22.png')} alt='Image' data-animate='fadeInRight' />

                </div>

              </div>
            </div>

            <div className='container clearfix'>

              <div className='col_one_fourth nobottommargin'>

                <div className='fancy-title title-border'>
                  <h4>Opening Hours</h4>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur facilis cumque amet suscipit odio.</p>

                <ul className='iconlist nobottommargin'>
                  <li><i className='icon-time color' /> <strong>Mondays-Fridays:</strong> 10AM to 7PM</li>
                  <li><i className='icon-time color' /> <strong>Saturdays:</strong> 11AM to 3PM</li>
                  <li><i className='icon-time text-danger' /> <strong>Sundays:</strong> Closed</li>
                </ul>

              </div>

              <div className='col_one_fourth nobottommargin'>

                <div className='fancy-title title-border'>
                  <h4>Our Buffet Menu</h4>
                </div>

                <p>Our Buffet Menu is unique &amp; filling consisting of different types of 5 Starters, 12 Full-Course Dishes, 9 Desserts &amp; 3 Mocktails which you are gonna relish to the core.</p>

                <a href='#' className='button button-rounded button-dark noleftmargin'><i className='icon-file-alt' /> Browse Menu</a>

              </div>

              <div className='col_half nobottommargin col_last'>

                <div className='fancy-title title-border'>
                  <h4>Gallery</h4>
                </div>

                <div className='masonry-thumbs col-4 clearfix' data-lightbox='gallery' style={{ 'width': '100.3%' }}>
                  <a href='images/restaurant/3.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/3.jpg')} alt='Gallery Thumb 1' data-animate='zoomIn' /></a>
                  <a href='images/restaurant/5.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/5.jpg')} alt='Gallery Thumb 2' data-animate='zoomIn' data-delay='100' /></a>
                  <a href='images/restaurant/6.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/6.jpg')} alt='Gallery Thumb 3' data-animate='zoomIn' data-delay='200' /></a>
                  <a href='images/restaurant/7.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/7.jpg')} alt='Gallery Thumb 4' data-animate='zoomIn' data-delay='300' /></a>
                  <a href='images/restaurant/8.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/8.jpg')} alt='Gallery Thumb 5' data-animate='zoomIn' data-delay='400' /></a>
                  <a href='images/restaurant/10.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/10.jpg')} alt='Gallery Thumb 6' data-animate='zoomIn' data-delay='500' /></a>
                  <a href='images/restaurant/11.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/11.jpg')} alt='Gallery Thumb 7' data-animate='zoomIn' data-delay='600' /></a>
                  <a href='images/restaurant/12.jpg' data-lightbox='gallery-item'><img className='image_fade' src={require('images/restaurant/thumb/gallery/12.jpg')} alt='Gallery Thumb 8' data-animate='zoomIn' data-delay='700' /></a>
                </div>

              </div>

            </div>

            <div className='section parallax noborder dark footer-stick topmargin-lg' style={{ backgroundImage: 'url(' + require('images/restaurant/4.jpg') + ')', padding: '80px 0' }} data-stellar-background-ratio='0.3'>
              <div className='container clearfix'>
                <div className='col_three_fifth nobottommargin'>

                  <div className='heading-block nobottomborder'>
                    <h3>Reviews</h3>
                  </div>

                  <div className='fslider restaurant-reviews' data-arrows='false' data-animation='slide'>
                    <div className='flexslider'>
                      <div className='slider-wrap'>
                        <div className='slide'>
                          <p className='lead'>"Gobalization fairness non-partisan visionary, institutions Aga Khan resolve. Results public-private partnerships, international development elevate scalable.'</p>
                          <span><strong>John Doe</strong>, New York Magazine</span><br />
                          <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star-half-full' />
                        </div>
                        <div className='slide'>
                          <p className='lead'>'Medicine; experience in the field climate change achieve voice public-private partnerships process our ambitions. Sanitation.'</p>
                          <span><strong>Mary Jane</strong>, Chicago News</span><br />
                          <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star-half-full' /> <i className='icon-star-empty' />
                        </div>
                        <div className='slide'>
                          <p className='lead'>'Healthcare forward-thinking public service, social innovation making progress. Arab Spring social analysis, equality treatment, diversification.'</p>
                          <span><strong>Luis Frank</strong>, France</span>
                          <br />
                          <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star3' /> <i className='icon-star-empty' />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

// ReactDOM.render((<Slider />), document.getElementById('slider'))

export default Homepage
