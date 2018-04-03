import React, { Component } from 'react'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class CartItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { foodState, food, dispatch } = this.props
    return (
      <div className='cart-item'>
        <img src={food.imageUrl || '/lib/images/me.jpg'} />
        <span className='name'>{food.name}</span>
      </div>
    )
  }
}

export default CartItem
