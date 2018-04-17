import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RegisterForm from 'components/form/Register'
import { submitRegister } from '../../lib/actions/submit'

import 'styles/auth.css'

class SignUp extends Component {
  render() {
    return (
      <div className='auth-page container-fluid'>
        {/* <div id='container'>
          <h1>Đăng nhập</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>

          <div className='container-fluid'>
            <DecoratedRegisterForm />
            <div id='remember-container'>
              <Link to='/login'>Đăng nhập</Link >
            </div>
          </div>
        </div> */}

        <div id='forgotten-container'>
          <div className='container-fluid'>
            <h1>Đăng ký</h1>
            <span className='close-btn'>
              <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
            </span>
            <DecoratedRegisterForm />
            <div id='remember-container'>
              <Link to='/login' id='remember'>Đăng nhập</Link >
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const DecoratedRegisterForm = reduxForm({
  form: 'register',
  onSubmit: submitRegister
})(RegisterForm)

export default SignUp
