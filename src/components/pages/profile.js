import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {
  render () {
    return (
      <section id='content'>

        <div className='content-wrap'>

          <div className='container clearfix'>

            <div className='row clearfix'>

              <div className='col-sm-12'>

                <img src={require('images/author/1.jpg')} className='alignleft img-circle img-thumbnail notopmargin nobottommargin' alt='Avatar' style={{ maxWidth: '84px' }} />

                <div className='heading-block noborder'>
                  <h3>Nguyễn Kenny</h3>
                  <span>Tham gia ngày 20/11/2017</span>
                </div>

                <div className='clear' />

                <div className='row clearfix'>

                  <div className='col-md-12'>

                    <div className='tabs tabs-alt clearfix' id='tabs-profile'>

                      <ul className='tab-nav clearfix'>
                        <li><a href='#tab-feeds'><i className='icon-rss2' /> Lịch sử</a></li>
                        <li><a href='#tab-posts'><i className='icon-pencil2' /> Chỉnh sửa thông tin</a></li>
                      </ul>

                      <div className='tab-container'>

                        <div className='tab-content clearfix' id='tab-feeds'>

                          <p className=''>Lịch sử thanh toán</p>

                          <div className='table-responsive'>
                            <table className='table table-bordered table-striped'>
                              <thead>
                                <tr>
                                  <th>Ngày</th>
                                  <th>Giờ</th>
                                  <th>Bàn số</th>
                                  <th>Tổng giá trị</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link to='/order-detail'><code>15/03/2017</code></Link>
                                  </td>
                                  <td>
                                    <Link to='/order-detail'><code>19:20 - 21:00</code></Link>
                                  </td>
                                  <td><Link to='/order-detail'><code>17</code></Link></td>
                                  <td><Link to='/order-detail'><code>245.000 VND</code></Link></td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to='/order-detail'><code>05/03/2017</code></Link>
                                  </td>
                                  <td>
                                    <Link to='/order-detail'><code>18:20 - 19:10</code></Link>
                                  </td>
                                  <td><Link to='/order-detail'><code>17</code></Link></td>
                                  <td><Link to='/order-detail'><code>475.000 VND</code></Link></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                        <div className='tab-content clearfix' id='tab-posts'>

                          <div className='row topmargin-sm clearfix'>

                            <div className='container'>

                              <div className='fancy-title title-dotted-border'>
                                <h3>Chỉnh sửa thông tin cá nhân</h3>
                              </div>

                              <div className='contact-widget'>

                                <div className='contact-form-result' />

                                <form className='nobottommargin' id='template-contactform' name='template-contactform' action='#' method='post'>

                                  <div className='form-process' />

                                  <div className='col_one_third'>
                                    <label htmlFor='template-contactform-name'>Tên <small>*</small></label>
                                    <input type='text' id='template-contactform-name' name='template-contactform-name' defaultValue='' className='sm-form-control required' />
                                  </div>

                                  <div className='col_one_third'>
                                    <label htmlFor='template-contactform-email'>Email <small>*</small></label>
                                    <input type='email' id='template-contactform-email' name='template-contactform-email' defaultValue='' className='required email sm-form-control' />
                                  </div>

                                  <div className='col_one_third col_last'>
                                    <label htmlFor='template-contactform-phone'>Điện thoại</label>
                                    <input type='text' id='template-contactform-phone' name='template-contactform-phone' defaultValue='' className='sm-form-control' />
                                  </div>

                                  <div className='clear' />

                                  <div className='col_full'>
                                    <label htmlFor='template-contactform-subject'>Địa chỉ <small>*</small></label>
                                    <input type='text' id='template-contactform-subject' name='template-contactform-subject' defaultValue='' className='required sm-form-control' />
                                  </div>

                                  <div className='clear' />

                                  <div className='col_full'>
                                    <button name='submit' type='submit' id='submit-button' tabIndex='5' defaultValue='Submit' className='button button-3d nomargin'>Hoàn tất</button>
                                  </div>

                                </form>
                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className='line visible-xs-block' />

            </div>

          </div>

        </div>

      </section>
    )
  }
}
export default Profile
