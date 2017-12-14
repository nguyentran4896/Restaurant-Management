import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'

import 'stylesheets/auth.min.css'

class Auth extends Component {
  constructor () {
    super()
    this.state = {
      isLogging: cookie.load('isLogging')
    }
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin () {
    this.setState({ isLogging: true })
    cookie.save('isLogging', true, { path: '/' })
    this.props.history.push('/')
    window.location.reload()
  }

  componentWillMount () {
    this.setState({userId: cookie.load('userId')})
  }
  render () {
    return (
      <section id='content'>

        <div className='content-wrap'>

          <div className='container clearfix'>

            <div className='accordion accordion-lg divcenter nobottommargin clearfix' style={{maxWidth: '550px'}}>

              <div className='acctitle'><i className='acc-closed icon-lock3' /><i className='acc-open icon-unlock' />Đăng nhập</div>
              <div className='acc_content clearfix'>
                <form id='login-form' name='login-form' className='nobottommargin'>
                  <div className='col_full'>
                    <label htmlFor='login-form-username'>Tài khoản:</label>
                    <input type='text' id='login-form-username' name='login-form-username' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='login-form-password'>Mật khẩu:</label>
                    <input type='password' id='login-form-password' name='login-form-password' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full nobottommargin'>
                    <button onClick={this.onLogin} className='button button-3d button-black nomargin' id='login-form-submit' name='login-form-submit' defaultValue='login'>Đăng nhập</button>
                    <a href='#' className='fright'>Quên mật khẩu?</a>
                  </div>
                </form>
              </div>

              <div className='acctitle'><i className='acc-closed icon-user4' /><i className='acc-open icon-ok-sign' />Chưa có tài khoản? Đăng ký ngay</div>
              <div className='acc_content clearfix'>
                <form id='register-form' name='register-form' className='nobottommargin' action='#' method='post'>
                  <div className='col_full'>
                    <label htmlFor='register-form-name'>Tên:</label>
                    <input type='text' id='register-form-name' name='register-form-name' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-email'>Email:</label>
                    <input type='text' id='register-form-email' name='register-form-email' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-username'>Username:</label>
                    <input type='text' id='register-form-username' name='register-form-username' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-phone'>Điện thoại:</label>
                    <input type='text' id='register-form-phone' name='register-form-phone' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-password'>Mật khẩu:</label>
                    <input type='password' id='register-form-password' name='register-form-password' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full'>
                    <label htmlFor='register-form-repassword'>Nhập lại mật khẩu:</label>
                    <input type='password' id='register-form-repassword' name='register-form-repassword' defaultValue='' className='form-control' />
                  </div>

                  <div className='col_full nobottommargin'>
                    <button className='button button-3d button-black nomargin' id='register-form-submit' name='register-form-submit' defaultValue='register'>Đăng ký</button>
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
