import { SubmissionError } from 'redux-form'
import request from 'request-promise'

import { makeRequestOptions } from '../requestHeader'
import { showNotification } from './showNotification'
import Navigator from 'lib/Navigator'
import { userHasSignedIn } from 'ducks/user'
// Redux-form requires a promise for async submission
// so we return a promise
export const submitLogin =
  (values, dispatch, props) => {
    const { email, password } = values
    let userLogin = null;
    const url = 'website/login'
    // const url = 'login'
    const params = { email: email, password: password }

    return request(makeRequestOptions(params, url)).then(body => {
     debugger;
      if (body.code === 0) {
        userLogin = body.data;
        dispatch(userHasSignedIn(userLogin))
        Navigator.push('/')
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
  debugger;
  const { email, password,  name, phoneNumber, position, birthday, gender } = values

  const url = 'website/register'
  const params = { email: email, password: password,  name: name, phoneNumber: phoneNumber, position: position, birthday: birthday, gender: gender }
  return request(makeRequestOptions(params, url)).then(body => {
    if (body.code === 0) {
      showNotification('topCenter', 'success', 'Đăng ký thành công')
      Navigator.push('auth')
    } else if(body.code === 418){
      showNotification('topCenter', 'error', 'Email đã được đăng ký')
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