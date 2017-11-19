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
              <li className='dark' data-transition='fade' data-slotamount='1' data-masterspeed='1500' data-thumb={require('images/restaurant/slider/thumb/2.jpg')} data-delay='12000' data-saveperformance='off' data-title='Delicious Recipes'>
                <img src={require('images/restaurant/slider/2.jpg')} alt='kenburns1' data-bgposition='left center' data-kenburns='on' data-duration='12000' data-ease='Linear.easeNone' data-scalestart='130' data-scaleend='100' data-bgpositionend='right center' />

                <div className='tp-caption ltl tp-resizeme revo-slider-caps-text uppercase'
                  data-x='600'
                  data-y='215'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1000'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' >Finger Lickin' Good</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-emphasis-text nopadding noborder'
                  data-x='597'
                  data-y='230'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1200'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Delicious Recipes</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-desc-text tleft'
                  data-x='600'
                  data-y='340'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1400'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Welcome to the Home of Fabulously Tasty homemade food that's gonna make you forget your mom.!</div>

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
              <li data-transition='slidedown' data-slotamount='1' data-masterspeed='1500' data-thumb={require('images/restaurant/slider/thumb/1.jpg')} data-delay='10000' data-saveperformance='off' data-title='Book your Tables'>
                <img src={require('images/restaurant/slider/1.jpg')} alt='kenburns6' data-bgposition='center top' data-kenburns='on' data-duration='10000' data-ease='Linear.easeNone' data-scalestart='120' data-scaleend='100' data-bgpositionend='center center' />

                <div className='tp-caption ltl tp-resizeme revo-slider-caps-text uppercase'
                  data-x='0'
                  data-y='215'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1000'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Easy Seat Reservations</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-emphasis-text nopadding noborder'
                  data-x='-3'
                  data-y='230'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1200'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Book your Tables</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-desc-text tleft'
                  data-x='0'
                  data-y='340'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1400'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Try our Mobile App to Reserve Tables in our Restaurant to avoid the Queue.</div>

                <div className='tp-caption ltl tp-resizeme'
                  data-x='0'
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
                  data-endeasing='Power4.easeIn' ><a href='#' className='button button-3d button-black button-large button-rounded tright nomargin'><span>Reserve Now</span> <i className='icon-angle-right' /></a></div>

              </li>

              <li className='dark' data-transition='slideleft' data-slotamount='1' data-masterspeed='1500' data-thumb={require('images/restaurant/slider/thumb/3.jpg')} data-delay='12000' data-saveperformance='off' data-title='Full Featured Menu'>
                <img src={require('images/restaurant/slider/3.jpg')} alt='kenburns3' data-bgposition='left top' data-kenburns='on' data-duration='12000' data-ease='Linear.easeNone' data-scalestart='130' data-scaleend='100' data-bgpositionend='right bottom' />

                <div className='tp-caption ltl tp-resizeme revo-slider-caps-text uppercase'
                  data-x='440'
                  data-y='215'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1000'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' >Wide Array of Options</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-emphasis-text nopadding noborder'
                  data-x='287'
                  data-y='230'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1200'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn' >Full Featured Menus</div>

                <div className='tp-caption ltl tp-resizeme revo-slider-desc-text'
                  data-x='245'
                  data-y='340'
                  data-transform_in='x:0;y:150;z:0;rotationZ:0;scaleX:1;scaleY:1;skewX:0;skewY:0;s:800;e:Power4.easeOutQuad;'
                  data-speed='800'
                  data-start='1400'
                  data-easing='easeOutQuad'
                  data-splitin='none'
                  data-splitout='none'
                  data-elementdelay='0.01'
                  data-endelementdelay='0.1'
                  data-endspeed='1000'
                  data-endeasing='Power4.easeIn'>Choose from Continental, Oriental, Italian or Thai Cuisines. Or Simply create your own Mix.</div>

                <div className='tp-caption ltl tp-resizeme'
                  data-x='496'
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
                  data-endeasing='Power4.easeIn' ><a href='#' className='button button-border button-white button-light button-large button-rounded tright nomargin'><span>Start Now</span> <i className='icon-angle-right' /></a></div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
export default Slider
