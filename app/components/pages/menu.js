import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFoods, minusFoodQuantity, plusFoodQuantity, submitOrder } from 'lib/actions/food'
import FoodItem from 'components/pages/element/menu-item'
import ButtonOrder from 'components/pages/element/button-order'
import 'styles/menu.css'

class Menu extends Component {
  componentDidMount() {
    this.props.dispatch(getFoods())
  }

  render() {
    const { foodState, user, dispatch } = this.props
    return (
      <div className='content'>
        <div className='menu'>
          <div className='container'>
            <div className='menu-top'>
              <div className='col-md-4 menu-left animated wow fadeInLeft' data-wow-duration='700ms' data-wow-delay='500ms'>
                <h3>Menu</h3>
                <label><i className='glyphicon glyphicon-menu-up' /></label>
                <span>There are many variations</span>
              </div>
              <div className='col-md-8 menu-right animated wow fadeInRight' data-wow-duration='700ms' data-wow-delay='500ms'>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour , or randomised words which don't look even slightly believable.There are many variations by injected humour. There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour , or randomised words</p>
              </div>
              <div className='clearfix' />
            </div>

            <div className='menu-bottom animated wow fadeInUp' data-wow-duration='700ms' data-wow-delay='500ms'>

              {foodState.items.map((x, i) =>
                <FoodItem
                  key={i}
                  minusFoodQuantity={minusFoodQuantity}
                  plusFoodQuantity={plusFoodQuantity}
                  indexItem={i}
                  foodState={foodState}
                  dispatch={dispatch}
                  food={x} />
              )}

              <div className='clearfix' />
            </div>

            <ButtonOrder
              submitOrder={submitOrder}
              user={user}
              dispatch={dispatch}
              foodState={foodState} />

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  foodState: state.food,
  user: state.user
})

export default connect(mapStateToProps)(Menu)
