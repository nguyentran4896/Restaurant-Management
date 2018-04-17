import {
  FETCH_NOTIFICATION_SUCCESS,
  NOTIFICATION_CHANGED
} from '../lib/actions/notification'

const initialState = {
  data: {},
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATION_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: true,
        error: null
      }

    case NOTIFICATION_CHANGED: {
      const { id } = action.item

      return {
        ...state,
        data: {
          ...state.data,
          [id]: action.item
        }
      }
    }

    default:
      return state
  }
}

export default reducer
