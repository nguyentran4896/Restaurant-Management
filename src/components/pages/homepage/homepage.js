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
                    <img src={require('images/restaurant.jpg')} alt='Why choose Us?' />
                  </div>
                  <div className='fbox-desc'>
                    <h3>Sự lựa chọn tốt nhất.<span className='subtitle'>Khảo sát 300 khách hàng của Evashow</span></h3>
                    <p>Với phương châm chất lượng hàng đầu, BK Food tự hào đón nhận sự hài lòng của 98% khách hàng sử dụng dịch vụ!</p>
                  </div>
                </div>
              </div>

              <div className='col_one_third nobottommargin'>
                <div className='feature-box media-box'>
                  <div className='fbox-media'>
                    <img src={require('images/restaurant-2.jpg')} alt='Why choose Us?' />
                  </div>
                  <div className='fbox-desc'>
                    <h3>Sứ mệnh.<span className='subtitle'>Kết hợp văn hóa ẩm thực năm châu.</span></h3>
                    <p>Sự đa dạng là một trong những yếu tố quan trọng trong sứ mệnh phục vụ của chúng tôi. Mang đến sự tươi mới, hấp dẫn mỗi ngày trong thực đơn.</p>
                  </div>
                </div>
              </div>

              <div className='col_one_third nobottommargin col_last'>
                <div className='feature-box media-box'>
                  <div className='fbox-media'>
                    <img src={require('images/restaurant-3.jpg')} alt='Why choose Us?' />
                  </div>
                  <div className='fbox-desc'>
                    <h3>Phương châm.<span className='subtitle'>Mỗi bữa ăn là một tác phẩm tuyệt vời.</span></h3>
                    <p>Một bữa ăn không chỉ đơn thuần là thưởng thức món ngon, nó còn là sự trải nghiệm và tận hưởng.</p>
                  </div>
                </div>
              </div>

              <div className='clear' />

            </div>

            <div className='section dark bottommargin-lg' style={{ 'height': '340px', 'paddingTop': '30px' }}>
              <div className='container center clearfix vertical-middle'>
                <i className='i-plain i-xlarge icon-food2 divcenter bottommargin' />
                <div className='slider-caption slider-caption-center'>
                  <h2 data-animate='fadeInUp'>Dịch vụ tốt nhất</h2>
                  <p data-animate='fadeInUp' data-delay='200'>"Sự hài lòng của bạn là mục tiêu lớn nhất của chúng tôi"</p>
                </div>
              </div>
            </div>

            <div className='container clearfix'>

              <div className='col_one_fourth nobottommargin'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'><img src={require('images/icons/restaurant/glass.png')} alt='Icon' data-animate='zoomIn' /></a>
                  </div>
                  <h3>Quầy bar 24/7<span className='subtitle'>Tận hưởng phút giây giải trí bất tận</span></h3>
                </div>
              </div>

              <div className='col_one_fourth nobottommargin'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'>
                      <img src={require('images/icons/restaurant/fork.png')} alt='Icon' data-animate='zoomIn' data-delay='200' />
                    </a>
                  </div>
                  <h3>Thực đơn đa dạng<span className='subtitle'>Các món ăn đến từ khắp nơi trên thế giới</span></h3>
                </div>
              </div>

              <div className='col_one_fourth nobottommargin'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'><img src={require('images/icons/restaurant/cup.png')} alt='Icon' data-animate='zoomIn' data-delay='400' /></a>
                  </div>
                  <h3>Takeaway<span className='subtitle'>Tiện lợi mọi lúc mọi nơi</span></h3>
                </div>
              </div>

              <div className='col_one_fourth nobottommargin col_last'>
                <div className='feature-box fbox-center fbox-plain nobottomborder'>
                  <div className='fbox-icon'>
                    <a href='#'><img src={require('images/icons/restaurant/tea.png')} alt='Icon' data-animate='zoomIn' data-delay='600' /></a>
                  </div>
                  <h3>Không gian yên tĩnh<span className='subtitle'>Tận hưởng trọn vẹn bữa ăn trong không gian riêng của bạn</span></h3>
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

                  <div className='heading-block' style={{ 'paddingTop': '0px' }}>

                    <h2>Thực phẩm trực tiếp từ nông trại.</h2>
                    <span>Hàng chục đối tác nông trại, đảm bảo an toàn nghiêm ngặt về thực phẩm sạch.</span>

                  </div>

                  <p>nông trại, nông trang là một khu vực đất đai có diện tích tương đối rộng lớn (có thể bao gồm cả hồ, sông, đầm, đìa, rạch...), nằm ở vùng đồng quê, dùng để sản xuất nông nghiệp như trồng lúa, ngũ cốc, làm ruộng.</p>

                  <a href='#' className='button button-border button-large button-rounded topmargin-sm noleftmargin'>Chi tiết</a>

                </div>

              </div>
            </div>

            <div className='section nobg notopmargin noborder bottommargin-sm'>
              <div className='container clearfix'>

                <div className='col_half nobottommargin'>
                  <div className='heading-block' style={{ paddingTop: '0px' }}>
                    <h2>Đa dạng đến từng chi tiết.</h2>
                    <span>Ở BK Food, mọi thứ đều có thể được tùy chỉnh theo ý của bạn.</span>
                  </div>
                  <p>Bạn đang có thực đơn ăn kiêng, ăn chay hoặc có những thói quen ăn uống đặc biệt? Tất cả đều được đáp ứng ở BK Food.</p>
                  <a href='#' className='button button-border button-large button-rounded topmargin-sm noleftmargin'>Chi tiết</a>
                </div>
                <div className='col_half bottommargin-sm center col_last'>
                  <img src={require('images/restaurant/22.png')} alt='Image' data-animate='fadeInRight' />
                </div>
              </div>
            </div>

            <div className='container clearfix'>

              <div className='col_one_fourth nobottommargin'>

                <div className='fancy-title title-border'>
                  <h4>Giờ mở cửa</h4>
                </div>

                <p>Ngoài quầy bar phục vụ 24/7, nhà hàng sẽ mở cửa giờ cụ thể ở dưới.</p>

                <ul className='iconlist nobottommargin' style={{marginTop: '20px'}}>
                  <li><i className='icon-time color' /> <strong>Thứ 2 - Thứ 6:</strong> 10AM to 11PM</li>
                  <li><i className='icon-time color' /> <strong>Thứ 7 - CN:</strong> 7AM to 11PM</li>
                </ul>

              </div>

              <div className='col_one_fourth nobottommargin'>

                <div className='fancy-title title-border'>
                  <h4>Trang thực đơn tham khảo</h4>
                </div>

                <p>Ghé thăm trang thực đơn ngay để có được sự lựa chọn hấp dẫn nhất bạn nhé!</p>

                <a href='#' className='button button-rounded button-dark noleftmargin'><i className='icon-file-alt' /> Xem thực đơn</a>

              </div>

              <div className='col_half nobottommargin col_last'>

                <div className='fancy-title title-border'>
                  <h4>Hình ảnh</h4>
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
                    <h3>Phản hồi</h3>
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

export default Homepage
