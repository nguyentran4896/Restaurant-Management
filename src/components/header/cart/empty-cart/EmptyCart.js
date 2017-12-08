import React, {Component} from 'react'

const EmptyCart = (props) => {
  return (
    <div className='empty-cart'>
      <img src='https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png' alt='empty-cart' />
      <h2>Chưa có món nào được gọi!</h2>
    </div>
  )
}

export default EmptyCart
