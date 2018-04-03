import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from 'components/form/Login'
import RegisterForm from 'components/form/Register'
import { submitLogin, submitRegister } from '../../lib/actions/submit'

import 'styles/auth.css'

class Auth extends Component {
  render() {
    return (
      <div className='auth-page container-fluid'>
        <div id='container'>
          <h1>Đăng nhập</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>

          <div className='container-fluid'>
            <DecoratedLoginForm />
            <div id='remember-container'>
              <span id='forgotten'>Đăng ký</span>
            </div>
          </div>
        </div>

        <div id='forgotten-container'>
          <div className='container-fluid'>
            <h1>Đăng ký</h1>
            <span className='close-btn'>
              <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
            </span>

            <DecoratedRegisterForm />
          </div>
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

const DecoratedRegisterForm = reduxForm({
  form: 'register',
  onSubmit: submitRegister
})(RegisterForm)

export default Auth
