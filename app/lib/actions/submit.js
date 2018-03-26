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
    let admin = null

    const url = 'login'
    const params = { email: email, password: password }

    return request(makeRequestOptions(params, url)).then(body => {
      if (body.code === 0) {
        admin = body.data
        dispatch(adminHasSignedIn(admin))
        Navigator.push('dashboard')
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
