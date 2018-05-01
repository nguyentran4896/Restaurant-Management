import React, { Component } from 'react'
import R from 'ramda'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class CartItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { order, indexItem, dispatch } = this.props
    return (
      <div className='cart-item'>
        <img src={R.values(order.items[indexItem].imageUrl)[0] || '/lib/images/me.jpg'} />
        <div>
          <span className='name'>{order.items[indexItem].name + ' (' + order.items[indexItem].quantity + ')'}</span>
          <br />
          <span className='status'>{order.items[indexItem].status}</span>
        </div>
      </div>
    )
  }
}

export default CartItem
