import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getEvents } from 'lib/actions/event'
import { getFoods } from 'lib/actions/food'
import R from 'ramda'
import moment from 'moment'
class Header extends Component {
  componentDidMount() {
    this.props.dispatch(getEvents())
    this.props.dispatch(getFoods())
  }
  render() {
    const { eventState, foodState } = this.props
    return (
      <div className='content' id='content-down'>
        <div className='content-top-top'>
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
                  với hệ thống hút mùi tiêu chuẩn Hà Quốc sẽ là một trải nghiệm tuyệt vời bên gia đình, bạn bè.</p>
              </div>
              <div className='clearfix' />
            </div>
            <div className='content-mid'>

              {foodState.items.map((item, i) => {
                return (
                  <div className='col-md-4 food-grid animated wow fadeInUp'
                    data-wow-duration='1000ms' data-wow-delay='500ms' key={i}>
                    <div className=' hover-fold'>
                      <h4>{item.name.toUpperCase()}</h4>
                      <div className='top'>
                        <div className='front face'
                          style={{ background: 'url(' + R.values(item.imageUrl)[0] + ') top' }}
                        />
                        <div className='back face'>
                          <p>{item.description}</p>
                        </div>
                      </div>
                      <div className='bottom'
                        style={{ background: 'url(' + R.values(item.imageUrl)[0] + ') bottom' }}
                      />
                    </div>
                  </div>
                )
              })}
              <div className='clearfix' />
            </div>
          </div>
        </div>
        <div className='services'>
          <div className='container'>
            <div className='services-top'>
              <div className='col-md-8 services-right animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>Đội ngũ nhân viên được đào tạo bài bản chuyên nghiệp với thái độ phục vụ thân thiện, nhiệt tình chắc chắn sẽ thổi hồn vào cho không gian ấm áp này</p>
              </div>
              <div className='col-md-4 services-left animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>Dịch vụ</h3>
                <label>
                  <i className='glyphicon glyphicon-menu-up' />
                </label>
                <span>Cung cấp trải nghiệm tốt nhất</span>
              </div>
              <div className='clearfix' />
            </div>
            <div className='service-top'>
              <div className='col-md-5 service-top animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' service-grid'>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-shopping-cart' />
                    </div>
                  </div>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-thumbs-up' />
                    </div>
                  </div>
                  <div className='clearfix' />
                </div>
                <div className=' service-grid'>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-grain' />
                    </div>
                  </div>
                  <div className='col-md-6 service-grid1'>
                    <div className='hi-icon-wrap hi-icon-effect-5 hi-icon-effect-5a'>
                      <a href='#' className='hi-icon hi-icon-mobile glyphicon glyphicon-home' />
                    </div>
                  </div>
                  <div className='clearfix' />
                </div>

              </div>
              <div className='col-md-7 service-bottom animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <div className=' service-bottom1'>
                  <div className=' ser-bottom'>
                    <img src='/lib/images/sa.jpg' className='img-responsive' alt='' />
                  </div>
                  <div className='ser-top '>
                    <h5>Đặt món giao tận nơi nhanh chóng</h5>
                    <p>Chỉ với vài thao tác nhỏ. Bạn đã được phục vụ nhanh chóng những món ăn hấp dẫn mà không
                      cần phải đến trực tiếp nhà hàng</p>
                  </div>
                  <div className='clearfix' />
                </div>
                <div className=' service-bottom1'>
                  <div className=' ser-bottom'>
                    <img src='/lib/images/sa1.jpg' className='img-responsive' alt='' />
                  </div>
                  <div className='ser-top '>
                    <h5>Dịch vụ tốt nhất</h5>
                    <p>Đội ngũ nhân viên được đào tạo bài bản chuyên nghiệp với thái độ phục vụ thân thiện,
                      nhiệt tình chắc chắn sẽ thổi hồn vào cho không gian ấm áp này</p>
                  </div>
                  <div className='clearfix' />
                </div>
                <div className=' service-bottom1'>
                  <div className=' ser-bottom'>
                    <img src='/lib/images/sa2.jpg' className='img-responsive' alt='' />
                  </div>
                  <div className='ser-top '>
                    <h5>Thực phẩm sạch, an toàn tuyệt đối</h5>
                    <p>Nguồn thực phẩm luôn được kiểm tra và khép kín từ khâu nuôi trồng đến khâu chế biến.
                      Mang đến cho khách hàng sự yên tâm tuyệt đối về chất lượng các món ăn.
                    </p>
                  </div>
                  <div className='clearfix' />
                </div>
              </div>
              <div className='clearfix' />
            </div>
          </div>
        </div>
        <div className='content-top-top'>
          <div className='container'>
            <div className='content-top'>
              <div className='col-md-4 content-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>Tin tức & khuyến mãi</h3>
                <label>
                  <i className='glyphicon glyphicon-menu-up' />
                </label>
                <span>Mang thế giới ẩm thực đến gần bạn hơn</span>
              </div>
              <div className='col-md-8 content-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>Cập nhật hàng ngày những tin tức ẩm thực nóng hổi, những khuyến mãi hấp dẫn của nhà hàng
                  cũng như những món ăn, mẹo nấu nướng không thể bỏ qua
                </p>
              </div>
              <div className='clearfix' />
            </div>
            <div className='news-bottom'>
              <div className='news-bot'>
                {eventState.items.map((item, i) => {
                  return (
                    <div className='col-md-6 news-bottom1' key={i}>
                      <a href='single.html'>
                        <div className='content-item content-item2 animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                          <div className='overlay' />
                          <div className=' news-bottom2'>
                            <ul className='grid-news'>
                              <li>
                                <span>
                                  <i className='glyphicon glyphicon-calendar' />{moment.utc(item.start).format('DD-MM-YYYY')}</span>
                                <b>-</b>
                              </li>
                              <li>
                                <span>
                                  <i className='glyphicon glyphicon-calendar' />{moment.utc(item.end).format('DD-MM-YYYY')}</span>
                              </li>
                            </ul>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })}
                <div className='clearfix' />

                <div className='read-more'>
                  <Link className='link link-yaku' to='event'>
                    <span>X</span>
                    <span>e</span>
                    <span>m</span>
                    <span>&nbsp;</span>
                    <span>t</span>
                    <span>h</span>
                    <span>ê</span>
                    <span>m</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  eventState: state.event,
  foodState: state.food
})

export default connect(mapStateToProps)(Header)
