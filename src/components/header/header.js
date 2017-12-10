import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { findDOMNode } from 'react-dom'

import EmptyCart from './cart/empty-cart/EmptyCart'
import CartScrollBar from './cart/CartScrollBar'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showCart: false,
      cart: this.props.cartItems,
      mobileSearch: false
    }
  }
  handleCart (e) {
    e.preventDefault()
    this.setState({
      showCart: !this.state.showCart
    })
  }
  handleSubmit (e) {
    e.preventDefault()
  }
  handleMobileSearch (e) {
    e.preventDefault()
    this.setState({
      mobileSearch: true
    })
  }
  handleSearchNav (e) {
    e.preventDefault()
    this.setState({
      mobileSearch: false
    }, function () {
      this.refs.searchBox.value = ''
      this.props.handleMobileSearch()
    })
  }
  handleClickOutside (event) {
    const cartNode = findDOMNode(this.refs.cartPreview)
    if (cartNode.classList.contains('active')) {
      if (!cartNode || !cartNode.contains(event.target)) {
        this.setState({
          showCart: false
        })
        event.stopPropagation()
      }
    }
  }
  handleGoToOrderDetail (e) {
    e.preventDefault()
    window.location.assign('/order-detail')
  }
  componentDidMount () {
    document.addEventListener('click', this.handleClickOutside.bind(this), true)
  }
  componentWillUnmount () {
    document.removeEventListener('click', this.handleClickOutside.bind(this), true)
  }

  render () {
    let cartItems
    cartItems = this.state.cart.map(product => {
      return (
        <li className='cart-item' key={product.name}>
          <img className='product-image' src={product.image} />
          <div className='product-info'>
            <p className='product-name'>{product.name}</p>
            <p className='product-price'>{product.price}</p>
          </div>
          <div className='product-total'>
            <p className='quantity'>{product.quantity} {product.quantity > 1 ? 'Nos.' : 'No.'} </p>
            <p className='amount'>{product.quantity * product.price}</p>
          </div>
          <a className='product-remove' href='#' onClick={this.props.removeProduct.bind(this, product.id)}>×</a>
        </li>
      )
    })
    let view
    if (cartItems.length <= 0) {
      view = <EmptyCart />
    } else {
      view = <CSSTransitionGroup transitionName='fadeIn' transitionEnterTimeout={500} transitionLeaveTimeout={300} component='ul' className='cart-items'>{cartItems}</CSSTransitionGroup>
    }
    return (
      <header id='header'>
        <div id='header-wrap'>
          <div className='container clearfix'>
            <div id='primary-menu-trigger'><i className='icon-reorder' /></div>
            <div id='logo'>
              <Link to='/' className='standard-logo' data-dark-logo={require('images/logo-resto.png')}>
                <img src={require('images/logo-resto.png')} alt='Canvas Logo' />
              </Link>
              <Link to='/' className='retina-logo' data-dark-logo={require('images/logo-resto.png')}>
                <img src={require('images/logo@2x.png')} alt='Canvas Logo' />
              </Link>
            </div>

            <nav id='primary-menu' className='style-5'>
              <ul className='norightborder norightpadding norightmargin'>
                {/* <li className='current'>
                  <Link to='/'><div><i className='fa fa-cutlery' aria-hidden='true' />Trang chủ</div></Link>
                </li> */}
                <li>
                  <Link to='/menu'>
                    <div>
                      <i className='fa fa-cutlery' aria-hidden='true' />
                      Thực đơn
                    </div>
                  </Link>
                  <ul>
                    <li>
                      <Link to='/menu'>
                        <div>
                          <i class='fa fa-cutlery' />
                          Lẫu
                        </div>
                      </Link>
                      <ul>
                        <li>
                          <Link to='/menu'><div>Lẫu hải sản</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Lẫu bò</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Lẫu Cá lóc</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Lẫu Nấm</div></Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/menu'>
                        <div>
                          <i class='fa fa-cutlery' />
                          Các Món Nướng BBQ
                        </div>
                      </Link>
                      <ul>
                        <li>
                          <Link to='/menu'><div>Bò nướng</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Dê nướng</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Tôm nướng</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Mực nướng</div></Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/menu'>
                        <div>
                          <i class='fa fa-cutlery' />
                          Các Món Cơm
                        </div>
                      </Link>
                      <ul>
                        <li>
                          <Link to='/menu'><div>Cơm chiên hải sản</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Cơm nêu</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Cơm chiên dương châu</div></Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/menu'>
                        <div>
                          <i class='fa fa-cutlery' />
                          Các món canh
                        </div>
                      </Link>
                      <ul>
                        <li>
                          <Link to='/menu'><div>Canh chua cá lóc</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Canh rau</div></Link>
                        </li>
                        <li>
                          <Link to='/menu'><div>Canh lá giang</div></Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link to='/events'><div><i className='fa fa-shopping-cart' aria-hidden='true' />Khuyến mãi</div></Link></li>
                <li><Link to='/table-board'><div><i className='fa fa-cogs' aria-hidden='true' />Sơ đồ bàn ăn</div></Link></li>
                <li><Link to='/feedback'><div><i className='icon-pencil2' />Feedback</div></Link></li>
                <li><Link to='/auth'><div><i className='fa fa-lock' aria-hidden='true' />Đăng ký/Đăng nhập</div></Link></li>
              </ul>

              <div id='top-search'>
                <a href='#' id='top-search-trigger'>
                  <i className='icon-search3' />
                  <i className='icon-line-cross' />
                </a>
                <form action='#' method='get'>
                  <input type='search' name='q' ref='searchBox' className='form-control search-keyword' defaultValue=''
                    placeholder='Gõ &amp; nhấn Enter..' onChange={this.props.handleSearch} />
                </form>

                {/* <form action='#' method='get' className={this.state.mobileSearch ? 'search-form active' : 'search-form'}>
                  <a className='back-button' href='#' onClick={this.handleSearchNav.bind(this)}><img src='https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png' alt='back'/></a>
                  <input type='search' ref='searchBox' placeholder='Search for Vegetables and Fruits' className='search-keyword' onChange={this.props.handleSearch}/>
                  <button className='search-button' type='submit' onClick={this.handleSubmit.bind(this)}></button>
                </form> */}
              </div>

              <div id='top-cart'>
                <a className='cart-icon' href='#' onClick={this.handleCart.bind(this)} ref='cartButton'>
                  <img className={this.props.cartBounce ? 'tada' : ' '} src='https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png' alt='Cart' />
                  {this.props.totalItems ? <span className='cart-count'>{this.props.totalItems}</span> : ''}
                </a>

                <div className={this.state.showCart ? 'cart-preview active' : 'cart-preview'} ref='cartPreview'>
                  <CartScrollBar>
                    {view}
                  </CartScrollBar>
                  <div className='action-block'>
                    <button type='button' onClick={this.handleGoToOrderDetail} className={this.state.cart.length > 0 ? ' ' : 'disabled-'}>XEM CHI TIẾT</button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

      </header>
    )
  }
}

export default Header
