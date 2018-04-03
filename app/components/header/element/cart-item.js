import React, { Component } from 'react'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class CartItem extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { foodState, dispatch } = this.props
    return (
      <div className='col-md-4 menu-bottom1'>
        sadfasfasf
      </div>
    )
  }
}

export default CartItem
