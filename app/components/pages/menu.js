import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showNotification } from 'lib/actions/showNotification'
import { getFoods, minusFoodQuantity, plusFoodQuantity } from 'lib/actions/food'
import { submitOrder } from 'lib/actions/order'
import FoodItem from 'components/pages/element/menu-item'
import ButtonOrder from 'components/pages/element/button-order'
import 'styles/menu.css'

class Menu extends Component {
  componentDidMount() {
    this.props.dispatch(getFoods())
  }
  render() {
    const { foodState, user, order, dispatch } = this.props
    return (
      <div className='content'>
        <div className='menu'>
          <div className='container'>
            <div className='content-top'>
              <div className='col-md-4 content-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>Thực đơn</h3>
                <label>
                  <i className='glyphicon glyphicon-menu-up' />
                </label>
                <span>Thực đơn đa dạng, phong phú</span>
              </div>
              <div className='col-md-8 content-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>Thưởng thức đặc sản truyền thống cùng các món ăn Tây phương trong một không gian ấm cúng, sang trọng, tiện nghi
                  với hệ thống hút mùi tiêu chuẩn Hàn Quốc sẽ là một trải nghiệm tuyệt vời bên gia đình, bạn bè.</p>
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
  user: state.user,
  order: state.order.data
})

export default connect(mapStateToProps)(Menu)
