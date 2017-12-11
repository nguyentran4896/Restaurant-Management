import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrderDetail extends Component {
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
                    <th className='cart-product-name'>Trạng thái</th>
                    <th className='cart-product-subtotal'>Hủy?</th>
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
                      <span className='amount'>$19.99</span>
                    </td>

                    <td className='cart-product-quantity'>
                      <div className='quantity clearfix'>
                        <input type='button' defaultValue='-' className='minus' />
                        <input type='text' name='quantity' defaultValue='2' className='qty' />
                        <input type='button' defaultValue='+' className='plus' />
                      </div>
                    </td>

                    <td className='cart-product-subtotal'>
                      <span className='amount'>$39.98</span>
                    </td>

                    <td className='cart-product-name'>
                      <span class='label label-success'>Đã gọi</span>
                    </td>

                    <td className='cart-product-remove text-center'>
                      <a href='#' className='remove' title='Remove this item'><i className='icon-trash2' /></a>
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
                      <span className='amount'>$24.99</span>
                    </td>

                    <td className='cart-product-quantity'>
                      <div className='quantity clearfix'>
                        <input type='button' defaultValue='-' className='minus' />
                        <input type='text' name='quantity' defaultValue='1' className='qty' />
                        <input type='button' defaultValue='+' className='plus' />
                      </div>
                    </td>

                    <td className='cart-product-subtotal'>
                      <span className='amount'>$24.99</span>
                    </td>

                    <td className='cart-product-name'>
                      <span class='label label-success'>Đã gọi</span>
                    </td>
                    <td className='cart-product-remove text-center'>
                      <a href='#' className='remove' title='Remove this item'><i className='icon-trash2' /></a>
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
                      <span className='amount'>$13.99</span>
                    </td>

                    <td className='cart-product-quantity'>
                      <div className='quantity clearfix'>
                        <input type='button' defaultValue='-' className='minus' />
                        <input type='text' name='quantity' defaultValue='3' className='qty' />
                        <input type='button' defaultValue='+' className='plus' />
                      </div>
                    </td>

                    <td className='cart-product-subtotal'>
                      <span className='amount'>$41.97</span>
                    </td>

                    <td className='cart-product-name'>
                      <span class='label label-danger'>Đã hủy</span>
                    </td>
                    <td className='cart-product-remove text-center'>
                      <a href='#' className='remove' title='Remove this item'><i className='icon-trash2' /></a>
                    </td>
                  </tr>
                  <tr className='cart_item'>
                    <td colSpan='7'>
                      <div className='row clearfix'>
                        <div className='col-md-4 col-xs-4 nopadding'>
                          <div className='col-md-8 col-xs-7 nopadding'>
                            <input type='text' defaultValue='' className='sm-form-control' placeholder='Nhập mã giảm giá..' />
                          </div>
                          <div className='col-md-4 col-xs-5'>
                            <a href='#' className='button button-3d button-black nomargin'>Nhập mã giảm giá</a>
                          </div>
                        </div>
                        <div className='col-md-8 col-xs-8 nopadding'>
                          <a href='#' className='button button-3d nomargin fright'>Thanh toán ngay</a>
                          <a href='#' className='button button-3d notopmargin fright'>Gọi món</a>
                          <Link to='/menu' className='button button-3d notopmargin fright button-green'>Gọi thêm</Link>
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
export default OrderDetail
