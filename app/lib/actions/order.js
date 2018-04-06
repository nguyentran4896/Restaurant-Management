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
  if (!user.signedIn) {
    showNotificationNotSignedIn()
    return
  }
  const arrayItems = foodState.items
    .filter(x => x.quantity)
    .map(x => { x['status'] = 'Đang gọi món'; return x })

  var key, order;
  firebase.database().ref(user.data.vendorId + '/orders/')
    .orderByChild('userId')
    .equalTo(user.data.uid)
    .once('value', function (snapshot) {
      order = R.values(snapshot.val()).filter(x => x.status === 'Đang gọi món')
      if (!snapshot.val() && !order.le) {
        key = firebase.database().ref(user.data.vendorId + '/orders/').push().key
        order = {
          createdAt: Date.now(),
          updatedAt: Date.now(),
          transactionId: 'BILL.' + moment.utc().format('YYYY.MM.DD.hh.mm.ss'),
          status: 'Đang gọi món',
          totalPrice: R.sum(arrayItems.map(x => x.currentPrice * x.quantity)),
          items: arrayItems,
          userName: user.data.name,
          userId: user.data.uid,
          id: key
        }
        firebase.database().ref(user.data.vendorId + '/orders/').child(key).set(order)
        dispatch(fetchOrdersSuccess(order))

      } else {
        order = order[0]
        key = order.id
        order.items = order.items.concat(arrayItems)
        order.updatedAt = Date.now()
        order.totalPrice = R.sum(order.items.map(x => x.currentPrice * x.quantity))

        firebase.database().ref(user.data.vendorId + '/orders/').child(key).set(order)
        dispatch(fetchOrdersSuccess(order))
      }
    });
  showNotification('topCenter', 'success', 'Gọi món thành công!')
}

const showNotificationNotSignedIn = () => {
  showNotification('topCenter', 'error', 'Bạn cần đăng nhập để gọi món')
}