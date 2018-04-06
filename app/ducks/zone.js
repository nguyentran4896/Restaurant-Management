import R from 'ramda'
import {
  FETCH_ZONE_SUCCESS,
  FETCH_ZONE_BEGIN,
  ZONE_CHANGED,
  ZONE_DELETED
} from '../lib/actions/zone'
import { USER_SIGNED_OUT } from 'ducks/user'

const initialState = {
  items: {},
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ZONE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }

    case FETCH_ZONE_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: true,
        error: null
      }

    case ZONE_CHANGED: {
      const { id } = action.item

      return {
        ...state,
        items: {
          ...state.items,
          [id]: action.item
        }
      }
    }

    case ZONE_DELETED: {
      const { id } = action.item

      return {
        ...state,
        items: R.dissoc(id, state.items)
      }
    }

    case USER_SIGNED_OUT:
      return {...initialState}
    default:
      return state
  }
}

export default reducer
