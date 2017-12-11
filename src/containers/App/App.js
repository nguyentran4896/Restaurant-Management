import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// components
import Header from 'components/header/header'
// import Slider from 'components/slider/slider'
import Homepage from 'components/pages/homepage/homepage'
import Menu from 'components/pages/menu/menu'
import FoodDetail from 'components/pages/menu/food-detail'
import Events from 'components/pages/events/events'
import TableBoard from 'components/pages/table-board/table-board'
import Auth from 'components/pages/auth/auth'
import Feedback from 'components/pages/feedback/feedback'
import OrderDetail from 'components/pages/order-detail'
import Profile from 'components/pages/profile'

// includes
import 'stylesheets/App.min.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: '',
      category: '',
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  // Open Modal
  openModal (product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    })
  }
  // Close Modal
  closeModal () {
    this.setState({
      modalActive: false
    })
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <div className='container-fluid no-padding'>
            <div className='container-fluid no-padding'>
              <Header
                cartBounce={this.state.cartBounce}
                total={this.state.totalAmount}
                totalItems={this.state.totalItems}
                cartItems={this.state.cart}
                removeProduct={this.handleRemoveProduct}
                handleSearch={this.handleSearch}
                handleMobileSearch={this.handleMobileSearch}
                handleCategory={this.handleCategory}
                categoryTerm={this.state.category}
                updateQuantity={this.updateQuantity}
                productQuantity={this.state.moq}
              />

              <div className='clear' />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/table-board' component={TableBoard} />
              <Route exact path='/auth' component={Auth} />
              <Route exact path='/feedback' component={Feedback} />
              <Route exact path='/order-detail' component={OrderDetail} />
              <Route exact path='/food-detail' component={FoodDetail} />
              <Route exact path='/profile' component={Profile} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
