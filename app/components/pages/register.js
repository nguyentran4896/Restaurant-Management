import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import RegisterForm from 'components/form/Register'
import { submitRegister } from '../../lib/actions/submit'

import 'styles/auth.css'

class Register extends Component {
  render() {
    const {signedIn } = this.props
    
    return (
      <div className='auth-page container-fluid'>
      
        <div id='register-container'>
          <h1>Đăng ký</h1>
          <span className='close-btn'>
            <img src='//cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png' />
          </span>
          <DecoratedRegisterForm />
        </div>
      </div>
    )
  }
}

// Decorate LoginForm so that form is pure
const DecoratedRegisterForm = reduxForm({
  form: 'register',
  onSubmit: submitRegister
})(RegisterForm)
export default Register
