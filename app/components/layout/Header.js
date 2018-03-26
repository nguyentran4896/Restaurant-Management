import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { dispatchLogout } from 'ducks/admin'

const Header = (props) => {
  const { signedIn, dispatch, notifications } = props
  const logout = dispatchLogout(dispatch)

  if (signedIn) {
    return (
      <nav className='navbar navbar-transparent navbar-absolute fixed'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' data-toggle='collapse'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            </button>
          </div>
          <div className='collapse navbar-collapse' style={{ background: 'white' }}>
            <ul className='nav navbar-nav navbar-right'>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle' data-toggle='dropdown' aria-expanded="false">
                  <i className='material-icons'>notifications</i>
                  <span className='notification'>{Object.keys(notifications).length}</span>
                  <p className='hidden-lg hidden-md'>Notifications</p>
                </a>
                <ul className='dropdown-menu'>
                  {Object.keys(notifications).map((key, index) => {
                    return (
                      <li key={index}>
                        <a href='#'>{notifications[key].message}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li>
                <Link to='#'>
                  <i className='material-icons'>person</i>
                  <p className='hidden-lg hidden-md'>Trang cá nhân</p>
                </Link>
              </li>
              <li>
                <Link to='dashboard' onClick={e => { e.preventDefault(); logout() }}>
                  <i className='material-icons'>subdirectory_arrow_right</i>
                  <p className='hidden-lg hidden-md'>Thoát</p>
                </Link>
              </li>
            </ul>
            <form className='navbar-form navbar-right' role='search'>
            </form>
          </div>
        </div>
      </nav>
    )
  } else {
    return (<div/>)
  }
}

const mapStateToProps = (state) => ({
  signedIn: state.admin.signedIn,
  notifications: state.notification.data
})

export default connect(mapStateToProps)(Header)
