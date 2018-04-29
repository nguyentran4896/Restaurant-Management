import {
  FETCH_EVENT_BEGIN,
  FETCH_EVENT_SUCCESS,
  FETCH_EVENT_ERROR,
} from 'lib/actions/event'

import { USER_SIGNED_OUT } from 'ducks/user'

const initialState = {
  items: [],
  loading: false,
  error: null,
  totalPage: 0,
  sortBy: 'id',
  sortType: 'AtoZ'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.events
      }

    case FETCH_EVENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        items: []
      }

    case USER_SIGNED_OUT:
      return {...initialState}
    default:
      return state
  }
}

export default reducer
