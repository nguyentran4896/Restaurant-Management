import React from 'react'
import R from 'ramda'
import { connect } from 'react-redux'

import Auth from 'components/pages/login'

const _isLogin = (Component) => (props) => {
  const { signedIn, ...others } = props

  if (signedIn) {
    return <Component {...others} />
  } else {
    return <Auth />
  }
}

const mapStateToProps = (state) =>
  ({ signedIn: R.path(['user', 'signedIn'], state) })

export const isLogin = R.pipe(
  _isLogin,
  connect(mapStateToProps)
)
