import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import LoginForm from 'components/form/Login'
import { submitLogin } from '../../lib/actions/submit'

import 'styles/auth.css'

class Auth extends Component {
  render () {
    return (
      <div className='auth-page container-fluid'>
        <div id='login-button'>
          <img src='//dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png' />
        </div>
        <div id='container'>
          <h1>Log In</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>

          <form>
            <input type='email' name='email' placeholder='E-mail' />

            <input type='password' name='pass' placeholder='Password' />
            <a href='#'>Log in</a>
            <div id='remember-container'>
              <input type='checkbox' id='checkbox-2-1' className='checkbox' defaultChecked />
              <span id='remember'>Remember me</span>
              <span id='forgotten'>Forgotten password</span>
            </div>
          </form>

          <DecoratedLoginForm />

        </div>

        <div id='forgotten-container'>
          <h1>Forgotten</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>

          <form>
            <input type='email' name='email' placeholder='E-mail' />
            <a href='#' className='orange-btn'>Get new password</a>
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

export default Auth
