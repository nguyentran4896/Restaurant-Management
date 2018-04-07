import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from 'components/form/Login'
import { connect } from 'react-redux'
import { submitLogin } from '../../lib/actions/submit'
import 'styles/auth.css'

import { ToastContainer, toast } from 'react-toastify';
class Auth extends Component {
  render() {
    const { signedIn } = this.props
    if(signedIn) {
      return (
        <h1>Đã login</h1>
      )
    }
    return (
      <div className='auth-page container-fluid'>
        <div id='login-button'>
          <img src='//dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png' />
        </div>
        <div id='container'>
          <h1>Đăng nhập</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>

          <div className='container-fluid'>
            <DecoratedLoginForm />
            <div id='remember-container'>
              <a id = "register-a" href="/register" ><span  id='register'>Đăng ký </span></a>
              <span id='forgotten'>Quên mật khẩu</span>
            </div>
          </div>
        </div>

        <div id='forgotten-container'>
          <h1>Quên mật khẩu</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>

          <form>
            <input type='email' name='email' placeholder='E-mail' />
            <a href='#' className='orange-btn'>Lấy mật khẩu mới</a>
          </form>
        </div>
      </div>
    )
  }
}


// Decorate LoginForm so that form is pure
const DecoratedLoginForm = reduxForm({
  form: 'login',
  onSubmit: submitLogin
})(LoginForm)
const mapStateToProps = (state) => ({
  signedIn: state.user.signedIn
})
// export default Auth
export default connect(mapStateToProps)(Auth)
