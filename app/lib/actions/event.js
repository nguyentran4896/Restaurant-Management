import request from 'request-promise'

import { showNotification } from './showNotification'
import { makeGetRequestOptions } from '../requestHeader'

export const FETCH_EVENT_BEGIN = 'FETCH_EVENT_BEGIN'
export const FETCH_EVENT_SUCCESS = 'FETCH_EVENT_SUCCESS'
export const FETCH_EVENT_ERROR = 'FETCH_EVENT_ERROR'

export const fetchEventsBegin = () => ({
  type: FETCH_EVENT_BEGIN
})

export const fetchEventsSuccess = events => {
  return {
    type: FETCH_EVENT_SUCCESS,
    events: events
  }
}

export const fetchEventsError = error => ({
  type: FETCH_EVENT_ERROR,
  error: error
})

export const getEvents = params => dispatch => {
  request(makeGetRequestOptions('?vendorId=1', 'events')).then(body => {
    if (body.code === 401 || body.code === 400 || body.code === 414) {
      showNotification('topCenter', 'error', 'Quá trình xác thực xảy ra lỗi!')
    } else {
      dispatch(fetchEventsSuccess(body.data.items))
    }
  })
    .catch(err => dispatch(fetchEventsError(err)))
}
