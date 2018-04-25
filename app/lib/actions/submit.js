import { SubmissionError } from 'redux-form'
import request from 'request-promise'
import { makePostRequestOptions } from '../requestHeader'
import { userHasSignedIn } from 'ducks/user'
import { showNotification } from './showNotification'
// Redux-form requires a promise for async submission
// so we return a promise
export const submitLogin =
  (values, dispatch, props) => {
    const { email, password } = values
    let user = null

    const url = 'login'
    const params = { email: email, password: password, vendorId: 1 }

    return request(makePostRequestOptions(params, url)).then(body => {
      if (body.code === 0) {
        user = body.data
        dispatch(userHasSignedIn(user))
        window.location.href = '/'
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
    const { email, password, phoneNumber, name } = values
    let user = null

    const url = 'createUser'
    const params = { email: email, password: password, phoneNumber: phoneNumber, name: name, vendorId: 1 }
    
    return request(makePostRequestOptions(params, url)).then(body => {
      console.log(body);
      
      if (body.code === 0) {
        user = body.data
        dispatch(userHasSignedIn(user))
        window.location.href = '/'
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
