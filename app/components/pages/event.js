import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEvents } from 'lib/actions/event'

class Event extends Component {
  componentDidMount() {
    this.props.dispatch(getEvents())
  }
  render () {
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

            <div className='events-bottom'>
              <div className='col-md-5 events-bottom1 animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <a href='single.html'><img src='lib/images/ev.jpg' alt='' className='img-responsive' /></a>
              </div>
              <div className='col-md-7 events-bottom2 animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>At vero eos et</h3>
                <label><i className='glyphicon glyphicon-menu-up' /></label>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                </p>
              </div>
              <div className='clearfix' />
            </div>

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
