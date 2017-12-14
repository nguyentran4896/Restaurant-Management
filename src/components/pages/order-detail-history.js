import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrderDetailHistory extends Component {
  render () {
    return (
      <section id='content'>
        <div className='content-wrap'>
          <div className='container clearfix'>
            <div className='table-responsive bottommargin'>
              <table className='table cart'>
                <thead>
                  <tr>
                    <th className='cart-product-thumbnail'>&nbsp;</th>
                    <th className='cart-product-name'>Món</th>
                    <th className='cart-product-price'>Đơn giá</th>
                    <th className='cart-product-quantity'>Số lượng</th>
                    <th className='cart-product-subtotal'>Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='cart_item'>

                    <td className='cart-product-thumbnail'>
                      <a href='#'><img width='64' height='64' src={require('images/restaurant/food-3.jpg')} alt='Pink Printed Dress' /></a>
                    </td>

                    <td className='cart-product-name'>
                      <a href='#'>Chả giò Nam Bộ</a>
                    </td>

                    <td className='cart-product-price'>
                      <span className='amount'>119.000</span>
                    </td>

                    <td className='cart-product-quantity'>
                      <div className='quantity clearfix'>
                        <span><b>2</b></span>
                      </div>
                    </td>

                    <td className='cart-product-subtotal'>
                      <span className='amount'>238.000</span>
                    </td>
                  </tr>
                  <tr className='cart_item'>

                    <td className='cart-product-thumbnail'>
                      <a href='#'><img width='64' height='64' src={require('images/restaurant/2.jpg')} alt='Checked Canvas Shoes' /></a>
                    </td>

                    <td className='cart-product-name'>
                      <a href='#'>Vịt hầm Bắc Kinh</a>
                    </td>

                    <td className='cart-product-price'>
                      <span className='amount'>240.000</span>
                    </td>

                    <td className='cart-product-quantity'>
                      <div className='quantity clearfix'>
                        <span><b>1</b></span>
                      </div>
                    </td>

                    <td className='cart-product-subtotal'>
                      <span className='amount'>240.000</span>
                    </td>
                  </tr>
                  <tr className='cart_item'>

                    <td className='cart-product-thumbnail'>
                      <a href='#'><img width='64' height='64' src={require('images/restaurant/1.jpg')} alt='Pink Printed Dress' /></a>
                    </td>

                    <td className='cart-product-name'>
                      <a href='#'>Xiên que Thái</a>
                    </td>

                    <td className='cart-product-price'>
                      <span className='amount'>139.000</span>
                    </td>

                    <td className='cart-product-quantity'>
                      <div className='quantity clearfix'>
                        <span><b>3</b></span>
                      </div>
                    </td>

                    <td className='cart-product-subtotal'>
                      <span className='amount'>417.000</span>
                    </td>
                  </tr>
                  <tr className='cart_item'>
                    <td colSpan='7'>
                      <div className='row clearfix'>
                        <div className='col-md-4 col-xs-4'>
                          <div className='amount'>Mã giảm giá: &nbsp;<b>#SA3N4H</b></div>
                        </div>
                        <div className='col-md-8 col-xs-8 text-right'>
                          <div className='amount '>Tổng cộng: &nbsp;895.000</div>
                          <div className='amount '>Khuyến mãi: &nbsp;200.000</div>
                          <div className='amount '>Thanh toán: &nbsp;<b>795.000</b></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default OrderDetailHistory
