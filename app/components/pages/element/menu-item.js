import React from 'react'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
const FoodItem = (props) => {
  const { name, currentPrice } = props.food

  return (
    <div className='col-md-4 menu-bottom1'>
      <div className='btm-right'>
        <a href='events.html'>
          <img src='/lib/images/me.jpg' alt='' className='img-responsive' />
          <div className='captn'>
            <h4>{ name }</h4>
            <p>{ parseToMoney(currentPrice) }</p>
          </div>
        </a>
      </div>
    </div>
  )
}

const parseToMoney = (number) => ((number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0') + ' VND' )

export default FoodItem
