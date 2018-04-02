import React from 'react'
import { Field } from 'redux-form'

import InputText from 'components/form/element/InputText'
import SubmitButton from 'components/form/element/SubmitButton'

// This form is pure so it is easy to test
// Page/Register will decorate it with the necessary props
const RegisterForm = (props) => {
  const { submitting, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <Field
        name='email'
        component={InputText}
        label='Email'
        type='email'
        required={true}
        placeHolder='Email'
      />
      <Field name='name'
        component={InputText}
        label='Tên người dùng'
        type='text'
        required={true}
        placeHolder='Tên'
      />
      <Field name='phoneNumber'
        component={InputText}
        label='Số điện thoại'
        type='text'
        placeHolder='Số điện thoại'
      />
      <Field
        name='password'
        component={InputText}
        label='Mật khẩu'
        type='password'
        required={true}
        placeHolder='Mật khẩu'
      />
      <SubmitButton
        text='Đăng ký'
        submitting={submitting}
        className='btn btn-primary btn-block btn-flat'
      />
    </form>
  )
}

export default RegisterForm
