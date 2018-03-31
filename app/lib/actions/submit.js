import { SubmissionError } from 'redux-form'
import request from 'request-promise'

import { makeRequestOptions } from '../requestHeader'
import { adminHasSignedIn } from 'ducks/admin'
import { showNotification } from './showNotification'
import Navigator from 'lib/Navigator'
// Redux-form requires a promise for async submission
// so we return a promise
export const submitLogin =
  (values, dispatch, props) => {
    const { email, password } = values

    const url = 'login'
    const params = { email: email, password: password }

    return request(makeRequestOptions(params, url)).then(body => {
      if (body.code === 0) {
        Navigator.push('')
      } else if (body.code === 416) {
        showNotification('topCenter', 'error', 'Mật khẩu không hợp lệ!')
      } else if (body.code === 414) {
        showNotification('topCenter', 'error', 'Tài khoản không tồn tại!')
      } else {
        showNotification('topCenter', 'error', 'Lỗi hệ thống')
      }

      return Promise.resolve()
    })
    .catch(function (err) {
      if (err.message) {
        showNotification('topCenter', 'error', err.message)
        throw new SubmissionError({ _error: err.message })
      } else {
        showNotification('topCenter', 'error', JSON.stringify(err))
        throw new SubmissionError({ _error: JSON.stringify(err) })
      }
    })
  }
export const submitRegister = 
(values, dispatch, props) => {
  const { email, password,  name, phoneNumber, position, birthday, gender } = values

  const url = 'website/register'
  const params = { email: email, password: password,  name: name, phoneNumber: phoneNumber, position: position, birthday: birthday, gender: gender }
  return request(makeRequestOptions(params, url)).then(body => {
    if (body.code === 0) {
      showNotification('topCenter', 'success', 'Đăng ký thành công')
      Navigator.push('auth')
    } else {
      showNotification('topCenter', 'error', 'Lỗi hệ thống')
    }
    return Promise.resolve()
  })
  .catch(function (err) {
    if (err.message) {
      showNotification('topCenter', 'error', err.message)
      throw new SubmissionError({ _error: err.message })
    } else {
      showNotification('topCenter', 'error', JSON.stringify(err))
      throw new SubmissionError({ _error: JSON.stringify(err) })
    }
  })
}