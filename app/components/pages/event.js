import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents } from 'lib/actions/event'
import R from 'ramda'

class Event extends Component {
  componentDidMount() {
    this.props.dispatch(getEvents())
  }
  render() {
    const { eventState, dispatch } = this.props
    return (
      <div className='content'>
        <div className='events'>
          <div className='container'>
            <div className='events-top'>
              <div className='col-md-4 events-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>Khuyến mãi</h3>
                <label><i className='glyphicon glyphicon-menu-up' /></label>
                <span>Các khuyến mãi hấp dẫn</span>
              </div>
              <div className='col-md-8 events-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>Luôn mang đến các chương trình khuyến mãi, giảm giá tốt nhất cho khách hàng.
                  <br />
                  Giảm giá thức ăn tại chỗ, thức ăn giao tận nơi.
                </p>
              </div>
              <div className='clearfix' />
            </div>

            {eventState.items.map((item, i) => {
              return (
                <div className='events-bottom' key={i}>
                  {(!i % 2) ?
                    <div className='col-md-5 events-bottom1 animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                      <img src={R.values(item.imageUrl)[0]} alt='' className='img-responsive' />
                    </div> : ''
                  }

                  <div className='col-md-7 events-bottom2 animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                    <h3>{item.name}</h3>
                    <label><i className='glyphicon glyphicon-menu-up' /></label>
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  </div>

                  {(i % 2) ?
                    <div className='col-md-5 events-bottom1 animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                      <img src={R.values(item.imageUrl)[0]} alt='' className='img-responsive' />
                    </div> : ''
                  }

                  <div className='clearfix' />
                </div>
              )
            })}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  eventState: state.event,
  user: state.user
})

export default connect(mapStateToProps)(Event)
