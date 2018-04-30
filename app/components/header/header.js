import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import CartItem from 'components/header/element/cart-item'
import { userHasSignedOut } from 'ducks/user'
import 'styles/header.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCart: false
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggleCart() {
    this.setState({
      isOpenCart: !this.state.isOpenCart
    })
  }

  componentDidMount() {
    $('.navicon').on('click', function (e) {
      e.preventDefault()
      $(this).toggleClass('navicon--active')
      $('.toggle').toggleClass('toggle--active')
    })
  }

  handleLogout(){
    var ok = confirm('Bạn có chắc muốn thoát?');
    if(ok) {
      this.props.dispatch(userHasSignedOut())
    }
  }

  render() {
    const { order, user, dispatch } = this.props
    return (
      <div className='header head'>
        <div className='container'>
          <div className='logo animated wow pulse' data-wow-duration='1000ms' data-wow-delay='500ms'>
            <h1>
              <Link to='/'>
                <span>C</span>
                <img src='/lib/images/oo.png' alt='' />
                <img src='/lib/images/oo.png' alt='' />
                kery
              </Link>
            </h1>
          </div>
          <div className='nav-icon'>
            <a href='#' className='navicon' />
            <div className='toggle'>
              <ul className='toggle-menu'>
                <li><Link to='/'>Trang chủ</Link></li>
                <li><Link to='/menu'>Thực đơn</Link></li>
                <li><Link to='/event'>Tin tức</Link></li>
                <li><Link to='/contact'>Liên hệ</Link></li>
                {
                  !user.signedIn &&
                  <li><Link to='/login'>Đăng nhập</Link></li>
                }
                {
                  user.signedIn &&
                  <li><Link to='/profile'>{user.data.name}</Link></li> 
                }
                {
                  user.signedIn &&
                  <li><a href='javascript:;' onClick={this.handleLogout}>Đăng xuất</a></li>
                }
              </ul>
            </div>
          </div>

          <div className='cart-wrapper'>
            <img className='cart' src='/lib/images/shopping-cart.png'
              onClick={this.toggleCart.bind(this)} />
            <ol className={'cart-modal' + (this.state.isOpenCart ? ' active' : '')}>
              {order.items.map((x, i) =>
                <CartItem
                  key={i}
                  indexItem={i}
                  order={order}
                  dispatch={dispatch} />
              )}
            </ol>
            <div className='badge'>{order.items.filter(x => x.quantity).length}</div>
          </div>

          <div className='clearfix' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  order: state.order.data
})

export default connect(mapStateToProps)(Header)
