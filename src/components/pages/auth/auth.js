import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'stylesheets/auth.min.css'

class Auth extends Component {
  render () {
    return (
      <section id='content'>

        <div className='content-wrap'>

          <div className='container clearfix'>

            <div className='accordion accordion-lg divcenter nobottommargin clearfix' style={{maxWidth: '550px'}}>

              <div className='acctitle'><i className='acc-closed icon-lock3' /><i className='acc-open icon-unlock' />Đăng nhập</div>
              <div className='acc_content clearfix'>
                <form id='login-form' name='login-form' className='nobottommargin' action='#' method='post'>
                  <div className='col_full'>
                    <label htmlFor='login-form-username'>Tài khoản:</label>
                    <input type='text' id='login-form-username' name='login-form-username' value='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='login-form-password'>Mật khẩu:</label>
                    <input type='password' id='login-form-password' name='login-form-password' value='' className='form-control' />
                  </div>

                  <div className='col_full nobottommargin'>
                    <button className='button button-3d button-black nomargin' id='login-form-submit' name='login-form-submit' value='login'>Đăng nhập</button>
                    <a href='#' className='fright'>Quên mật khẩu?</a>
                  </div>
                </form>
              </div>

              <div className='acctitle'><i className='acc-closed icon-user4' /><i className='acc-open icon-ok-sign' />Chưa có tài khoản? Đăng ký ngay</div>
              <div className='acc_content clearfix'>
                <form id='register-form' name='register-form' className='nobottommargin' action='#' method='post'>
                  <div className='col_full'>
                    <label htmlFor='register-form-name'>Tên:</label>
                    <input type='text' id='register-form-name' name='register-form-name' value='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-email'>Email:</label>
                    <input type='text' id='register-form-email' name='register-form-email' value='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-username'>Username:</label>
                    <input type='text' id='register-form-username' name='register-form-username' value='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-phone'>Điện thoại:</label>
                    <input type='text' id='register-form-phone' name='register-form-phone' value='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-password'>Mật khẩu:</label>
                    <input type='password' id='register-form-password' name='register-form-password' value='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-repassword'>Nhập lại mật khẩu:</label>
                    <input type='password' id='register-form-repassword' name='register-form-repassword' value='' className='form-control' />
                  </div>

                  <div className='col_full nobottommargin'>
                    <button className='button button-3d button-black nomargin' id='register-form-submit' name='register-form-submit' value='register'>Đăng ký</button>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>

      </section>
    )
  }
}
export default Auth
