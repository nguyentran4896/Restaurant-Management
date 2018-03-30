import React, { Component } from 'react'

// We receive props from ReduxForm's Field
// and turn them into props for Bootstrap forms
class FoodItem extends Component {
  constructor(props) {
    super(props)
    this.selectFood = this.props.selectFood.bind(this)
  }
  
  render() {
    const { food, indexItem, foodState, dispatch } = this.props
    return (
      <div className='col-md-4 menu-bottom1' onClick={e => {
        e.preventDefault();
        this.selectFood(foodState, indexItem, dispatch)
      }}>
        <div className='btm-right' style={{ marginTop: '30px' }}>
          <img src='/lib/images/me.jpg' alt='' className='img-responsive' />
          <div className={'captn' + (food.isSelected ? ' active' : '')} >
            <h4>{food.name}</h4>
            <p>{parseToMoney(food.currentPrice)}</p>
            <img className='animated fadeIn' style={checkStyle} src="data:image/svg+xml;base64,
PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNDQgNDQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtMjIsMGMtMTIuMiwwLTIyLDkuOC0yMiwyMnM5LjgsMjIgMjIsMjIgMjItOS44IDIyLTIyLTkuOC0yMi0yMi0yMnptMTIuNywxNS4xbDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjYtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjJjLTAuMi0wLjItMC4zLTAuNS0wLjMtMC43czAuMS0wLjUgMC4zLTAuN2wxLjQtMS40YzAuNC0wLjQgMS0wLjQgMS40LDBsLjEsLjEgNS41LDUuOWMwLjIsMC4yIDAuNSwwLjIgMC43LDBsMTMuNC0xMy45aDAuMWMwLjQtMC40IDEtMC40IDEuNCwwbDEuNCwxLjRjMC40LDAuMyAwLjQsMC45IDAsMS4zeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkNGOUY5IiBkYXRhLW9sZF9jb2xvcj0iI0Y5RjZGNiI+PC9wYXRoPjwvZz4gPC9zdmc+" />
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
