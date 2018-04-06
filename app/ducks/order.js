import { FETCH_ORDER_SUCCESS } from 'lib/actions/order'
import { USER_SIGNED_OUT } from 'ducks/user'

const initialState = {
  order: {},
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.order
      }

    case USER_SIGNED_OUT:
      return {...initialState}
    default:
      return state
  }
}

export default reducer
