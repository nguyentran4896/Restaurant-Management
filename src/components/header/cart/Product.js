import React, { Component } from 'react'
import Counter from './Counter'

class Product extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedProduct: {},
      quickViewProdcut: {},
      buttonLabel: 'GỌI MÓN'
    }
  }

  addToCart (image, name, price, id, quantity) {
    this.setState({
      selectedProduct: {
        image: image,
        name: name,
        price: price,
        id: id,
        quantity: quantity
      }
    }, function () {
      this.props.addToCart(this.state.selectedProduct)
    })
    this.setState({
      buttonLabel: '✔ ĐÃ GỌI'
    }, function () {
      setTimeout(() => {
        this.setState({ buttonLabel: 'GỌI THÊM' })
      }, 5000)
    })
  }
  quickView (image, name, price, id) {
    this.setState({
      quickViewProdcut: {
        image: image,
        name: name,
        price: price,
        id: id
      }
    }, function () {
      this.props.openModal(this.state.quickViewProdcut)
    })
  }
  render () {
    let image = this.props.image
    let name = this.props.name
    let price = this.props.price
    let id = this.props.id
    let quantity = this.props.productQuantity
    return (
      <div className='product'>
        <div className='product-image'>
          <img src={image} alt={this.props.name} onClick={this.quickView.bind(this, image, name, price, id, quantity)} />
        </div>
        <div className='container-fluid name-price-wrapper'>
          <h4 className='product-name pull-left'>{this.props.name}</h4>
          <p className='product-price pull-right'>{this.props.price}</p>
        </div>

        <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity} />
        <div className='product-action'>
          <button type='button' onClick={this.addToCart.bind(this, image, name, price, id, quantity)}>{this.state.buttonLabel}</button>
        </div>
      </div>
    )
  }
}

export default Product
