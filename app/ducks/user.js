import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

import Navigator from 'lib/Navigator'

const ADMIN_SIGNED_IN = 'user/ADMIN_SIGNED_IN'
const UPDATE_ACTIVE_LINK = 'user/UPDATE_ACTIVE_LINK'
export const ADMIN_SIGNED_OUT = 'user/ADMIN_SIGNED_OUT'

export const dispatchLogout = (dispatch) => () => {
  confirmAlert({
    title: '',
    message: 'Bạn có muốn đăng xuất?',
    buttons: [
      {
        label: 'Có',
        onClick: () => dispatch(userHasSignedOut())
      },
      {
        label: 'Không',
        onClick: () => {}
      }
    ]
  })
}

// Creators
export const userHasSignedOutNoRedirect = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGNED_OUT })
}

export const userHasSignedOut = () => (dispatch) => {
  dispatch({ type: ADMIN_SIGNED_OUT })
  Navigator.push('login')
}

export const userHasSignedIn = (admin) => (dispatch) => {
  dispatch({ type: ADMIN_SIGNED_IN, data: admin })
}

export const updateActiveLink = (link) => (dispatch) => {
  dispatch({ type: UPDATE_ACTIVE_LINK, activeLink: link })
}

// Reducer
const defaultState = {
  signedIn: false,
  activeLink: null,
  data: null
}

const reducer = (state = defaultState, action) => {
  const { type, data, activeLink } = action

  switch (type) {
    case ADMIN_SIGNED_IN:
      return {
        ...state,
        signedIn: true,
        data
      }
    case UPDATE_ACTIVE_LINK:
      return {
        ...state,
        signedIn: true,
        activeLink: activeLink
      }
    case ADMIN_SIGNED_OUT:
      return {...defaultState}
    default:
      return state
  }
}

export default reducer
