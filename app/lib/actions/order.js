import request from 'request-promise'
import { SubmissionError } from 'redux-form'
import R from 'ramda'
import moment from 'moment'
import * as firebase from 'firebase'

import { showNotification } from './showNotification'

export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS'

export const fetchOrdersSuccess = order => {
  return {
    type: FETCH_ORDER_SUCCESS,
    order: order
  }
}

export const getOrders = params => dispatch => {
  firebase.database().ref('orders/')
}

export const submitOrder = (foodState, user, dispatch) => {
  const arrayItems = foodState.items.filter(x => x.quantity)
  const newKey = firebase.database().ref(user.data.vendorId + '/orders/').push().key
  const newOrder = {
    createdAt: Date.now(),
    updatedAt: Date.now(),
    transactionId: 'BILL.' + moment.utc().format('YYYY.MM.DD.hh.mm.ss'),
    status: 'Đang chờ xác nhận',
    totalPrice: R.sum(arrayItems.map(x => x.currentPrice * x.quantity)),
    items: arrayItems.map(x => { x['status'] = 'Đang gọi món'; return x }),
    userName: user.data.name,
    userId: user.data.uid
  }
  firebase.database().ref(user.data.vendorId + '/orders/').child(newKey).set(newOrder)
  dispatch(fetchOrdersSuccess(newOrder))

  showNotification('topRight', 'success', 'Gọi món thành công!')
}