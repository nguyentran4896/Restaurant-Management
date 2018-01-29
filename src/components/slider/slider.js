import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'stylesheets/slider.min.css'

class Slider extends Component {
  render () {
    return (
      <section id='slider' className='slider-parallax revslider-wrap full-screen clearfix'>
        <div id='rev_slider_irestaurant_wrapper' className='rev_slider_wrapper fullscreen-container' data-alias='default-slider'>
          <div id='rev_slider_irestaurant' className='rev_slider fullscreenbanner' data-version='5.1.4'>
            <ul>
              <li className='dark' data-transition='fade' data-slotamount='1' data-masterspeed='1500' data-thumb={require('images/restaurant/slider/thumb/2.jpg')} data-delay='12000' data-saveperformance='off' data-title='Chất lượng'>
                <img src={require('images/restaurant/slider/2.jpg')} alt='kenburns1' data-bgposition='left center' data-kenburns='on' data-duration='12000' data-ease='Linear.easeNone' data-scalestart='130' data-scaleend='100' data-bgpositionend='right center' />

                <div className='tp-caption ltl tp-resizeme revo-slider-caps-text uppercase'
                  data-x='500'
                  data-y='115'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1000'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' >Chất lượng đảm bảo</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-emphasis-text nopadding noborder'
                  data-x='497'
                  data-y='130'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1200'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Chất lượng hàng đầu</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-desc-text tleft'
                  data-x='500'
                  data-y='240'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1400'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Tiêu chí hàng đầu là đảm bảo chất lượng, an toàn vệ sinh thực phẩm!</div>

                <div className='tp-caption ltl tp-resizeme'
                  data-x='600'
                  data-y='450'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1550'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' ><a href='#' className='button button-white button-light button-border button-large button-rounded tright nomargin'><span>Browse Menu</span> <i className='icon-angle-right' /></a></div>

              </li>
              <li data-transition='slidedown' data-slotamount='1' data-masterspeed='1500' data-thumb={require('images/restaurant/slider/thumb/1.jpg')} data-delay='10000' data-saveperformance='off' data-title='Đặt chỗ'>
                <img src={require('images/restaurant/slider/1.jpg')} alt='kenburns6' data-bgposition='center top' data-kenburns='on' data-duration='10000' data-ease='Linear.easeNone' data-scalestart='120' data-scaleend='100' data-bgpositionend='center center' />

                <div className='tp-caption ltl tp-resizeme revo-slider-caps-text uppercase'
                  data-x='0'
                  data-y='65'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1000'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Dễ dàng đặt chỗ</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-emphasis-text nopadding noborder'
                  data-x='-3'
                  data-y='100'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1200'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Đặt chỗ ngay</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-desc-text tleft'
                  data-x='0'
                  data-y='210'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1400'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Không cần phải chờ đợi, đặt chỗ và gọi món trước, chúng tôi sẽ sẵn sàng!</div>

                <div className='tp-caption ltl tp-resizeme'
                  data-x='0'
                  data-y='270'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1550'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' ><a href='#' className='button button-3d button-black button-large button-rounded tright nomargin'><span>Đặt chỗ ngay</span> <i className='icon-angle-right' /></a></div>

              </li>

              <li className='dark' data-transition='slideleft' data-slotamount='1' data-masterspeed='1500' data-thumb={require('images/restaurant/slider/thumb/3.jpg')} data-delay='12000' data-saveperformance='off' data-title='Thực đơn'>
                <img src={require('images/restaurant/slider/3.jpg')} alt='kenburns3' data-bgposition='left top' data-kenburns='on' data-duration='12000' data-ease='Linear.easeNone' data-scalestart='130' data-scaleend='100' data-bgpositionend='right bottom' />

                <div className='tp-caption ltl tp-resizeme revo-slider-caps-text uppercase'
                  data-x='440'
                  data-y='115'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1000'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' >Thực đơn hàng đầu</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-emphasis-text nopadding noborder'
                  data-x='287'
                  data-y='130'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1200'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' >Thực đơn đa dạng</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-desc-text'
                  data-x='245'
                  data-y='240'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1400'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Phục vụ các món ăn từ truyền thống đến các món Nhật, Pháp, Thái, Trung! Mọi thứ đều có sẵn!</div>

                <div className='tp-caption ltl tp-resizeme'
                  data-x='496'
                  data-y='300'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1550'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' ><a href='#' className='button button-border button-white button-light button-large button-rounded tright nomargin'><span>Xem thực đơn</span> <i className='icon-angle-right' /></a></div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default Slider