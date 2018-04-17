import React, { Component } from 'react'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class ButtonOrder extends Component {
  constructor(props) {
    super(props)
    this.submitOrder = this.props.submitOrder.bind(this)
  }
  
  render() {
    const { foodState, user, dispatch } = this.props
    return (
      <div className='button-order' onClick={e => {
        e.preventDefault();
        this.submitOrder(foodState, user, dispatch)
      }}>
      Order
      </div>
    )
  }
}

const checkStyle = {
  height: '55px',
  marginTop: '20px',
  display: 'none'
}


export default ButtonOrder
