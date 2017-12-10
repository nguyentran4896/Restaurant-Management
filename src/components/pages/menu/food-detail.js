import React, { Component } from 'react'

class FoodDetail extends Component {
  render () {
    return (
      <section id='content' style={{ marginTop: '30px' }}>
        <div className='content-wrap'>
          <div className='container clearfix'>
            <div className='single-product'>
              <div>
                <div className='col_two_fifth'>
                  <div className='product-image'>
                    <div className='fslider' data-pagi='false' data-arrows='false' data-thumbs='true'>
                      <div className='flexslider'>
                        <div className='slider-wrap' data-lightbox='gallery'>
                          <div className='slide' data-thumb='https://images1.houstonpress.com/imager/u/745xauto/7635901/hou_food_150701_principalburgerbernies_phaedracook.jpg'>
                            <a href='https://images1.houstonpress.com/imager/u/745xauto/7635901/hou_food_150701_principalburgerbernies_phaedracook.jpg' title='Pink Printed Dress - Front View' data-lightbox='gallery-item'>
                              <img src='https://images1.houstonpress.com/imager/u/745xauto/7635901/hou_food_150701_principalburgerbernies_phaedracook.jpg' alt='Pink Printed Dress' />
                            </a>
                          </div>
                          <div className='slide' data-thumb='https://media.timeout.com/images/101447733/image.jpg'>
                            <a href='https://media.timeout.com/images/101447733/image.jpg' title='Pink Printed Dress - Side View' data-lightbox='gallery-item'>
                              <img src='https://media.timeout.com/images/101447733/image.jpg' alt='Pink Printed Dress' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col_two_fifth product-desc'>
                  <div className='product-price'><del>300.000</del> <ins>200.000</ins></div>
                  <div className='clear' />
                  <div className='line' />
                  <form className='cart nobottommargin clearfix' method='post' enctype='multipart/form-data'>
                    <div className='quantity clearfix'>
                      <input type='button' value='-' className='minus' />
                      <input type='text' step='1' min='1' name='quantity' value='1' title='Qty' className='qty' size='4' />
                      <input type='button' value='+' className='plus' />
                    </div>
                    <button type='submit' className='add-to-cart button nomargin'>Gọi món</button>
                  </form>
                  <div className='clear' />
                  <div className='line' />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!</p>
                  <p>Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.</p>
                </div>
                <div className='col_full nobottommargin'>
                  <div className='tabs clearfix nobottommargin' id='tab-1'>
                    <ul className='tab-nav clearfix'>
                      <li><a href='#tabs-1'><i className='icon-align-justify2' /><span className='hidden-xs'> Description</span></a></li>
                    </ul>
                    <div className='tab-container'>
                      <div className='tab-content clearfix' id='tabs-1'>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!
Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!
Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!
Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!
Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default FoodDetail
