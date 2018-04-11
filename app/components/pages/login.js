import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import LoginForm from 'components/form/Login'
import { submitLogin } from '../../lib/actions/submit'

import 'styles/auth.css'

class LogIn extends Component {
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
              <Link to='/signup' id='remember'>Đăng ký</Link >
            </div>
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

export default LogIn
