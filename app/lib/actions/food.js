import request from 'request-promise'
import { SubmissionError } from 'redux-form'
import R from 'ramda'

import Navigator from 'lib/Navigator'
import { showNotification } from './showNotification'
import { makeGetRequestOptions } from '../requestHeader'

export const FETCH_FOOD_BEGIN = 'FETCH_FOOD_BEGIN'
export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS'
export const FETCH_FOOD_ERROR = 'FETCH_FOOD_ERROR'
export const FETCH_FOOD_SORT_VALUE = 'FETCH_FOOD_SORT_VALUE'
export const FETCH_FOOD_TOTAL_PAGE = 'FETCH_FOOD_TOTAL_PAGE'

export const fetchFoodsBegin = () => ({
  type: FETCH_FOOD_BEGIN
})

export const fetchFoodsSuccess = foods => {
  return {
    type: FETCH_FOOD_SUCCESS,
    foods: foods
  }
}

export const fetchFoodsError = error => ({
  type: FETCH_FOOD_ERROR,
  error: error
})

export const getFoods = params => dispatch => {
  request(makeGetRequestOptions('?vendorId=1', 'foods')).then(body => {
    if (body.code === 401 || body.code === 400 || body.code === 414) {
      showNotification('topRight', 'error', 'Quá trình xác thực xảy ra lỗi!')
    } else {
      dispatch(fetchFoodsSuccess(body.data.items))
    }
  })
    .catch(err => dispatch(fetchFoodsError(err)))
}

export const selectFood = (foodState, indexItem, dispatch) => {
    foodState.items[indexItem]['isSelected'] = !foodState.items[indexItem]['isSelected'];
    dispatch(fetchFoodsSuccess(foodState.items))
  }