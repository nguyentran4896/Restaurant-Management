import React from 'react'
import { Field } from 'redux-form'

import InputText from 'components/form/element/InputText'
import SubmitButton from 'components/form/element/SubmitButton'
// This form is pure so it is easy to test
// Page/Register will decorate it with the necessary props
const RegisterForm = (props) => {
    const { submitting, handleSubmit } = props
    return (
        <form
            onSubmit={handleSubmit}
            style={
                { marginTop: '20px' }}
        >
            <Field name='name'
                component={InputText}
                label='Tên người dùng'
                type='text'
                required={true}
            />
            <Field name='email'
                component={InputText}
                label='Email'
                type='email'
                required={true}
            />
            <Field name='password'
                component={InputText}
                label='Mật khẩu'
                type='password'
            />
            <Field name='phoneNumber'
                component={InputText}
                label='Số điện thoại'
                type='text'
            />
            <Field name='position'
                component={InputText}
                label='Địa chỉ'
                type='text'
            />
            <Field name='birthday'
                component={InputText}
                label='Ngày sinh'
                type='date'
            />
            <div className='form-group label-floating' style={{ marginTop: '0' }}>
                <label>Giới tính</label>
                <select className='form-control' name="gender">
                    <option value="Nam" key="Nam">Nam</option>
                    <option value="Nữ" key="Nữ">Nữ</option>
                </select>
            </div>
            <SubmitButton text='Đăng ký'
                submitting={submitting}
                className='btn btn-primary btn-block btn-flat'
            />
        </form>
    )
}

export default RegisterForm