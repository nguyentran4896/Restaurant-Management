import React, { Component } from 'react'
import R from 'ramda'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class FoodItem extends Component {
  constructor(props) {
    super(props)
    this.plusFoodQuantity = this.props.plusFoodQuantity.bind(this)
    this.minusFoodQuantity = this.props.minusFoodQuantity.bind(this)
  }

  render() {
    const { food, indexItem, foodState, dispatch } = this.props
    return (
      <div className='col-md-4 menu-bottom1'>
        <div className='btm-right' style={{ marginTop: '30px' }}>
          <img src={R.values(food.imageUrl)[0]} alt='' className='img-responsive' />
          <div className={'captn' + (food.quantity ? ' active' : '')} >
            <h4>{food.name}</h4>
            <p>{parseToMoney(food.currentPrice)}</p>
            <div className='text-center number-order'>
              <i className='fa fa-3x fa-minus-circle' onClick={e => {
                e.preventDefault();
                this.minusFoodQuantity(foodState, indexItem, dispatch)
              }} />
              <span>{food.quantity || 0}</span>
              <i className='fa fa-3x fa-plus-circle' onClick={e => {
                e.preventDefault();
                this.plusFoodQuantity(foodState, indexItem, dispatch)
              }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const checkStyle = {
  height: '55px',
  marginTop: '20px',
  display: 'none'
}

const parseToMoney = (number) => ((number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0') + ' VND')

export default FoodItem
