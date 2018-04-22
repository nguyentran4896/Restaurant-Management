import React, { Component } from 'react'
import R from 'ramda'
import { connect } from 'react-redux'

import { isLogin } from 'components/wrappers/isLogin'

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { user } =this.props;
    return (
      <div className='content'>
        <div className='contact'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header' data-background-color='purple'>
                    <h4 className='title'>Thông tin cá nhân</h4>
                  </div>
                  <div className='card-content'>
                    <form>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Tên</label>
                            <input type='text' className='form-control' value={user.data.name} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Email</label>
                            <input type='text' className='form-control' value={user.data.email}/>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>SĐT</label>
                            <input type='text' className='form-control' value={user.data.phoneNumber} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Mật khẩu</label>
                            <input type='password' className='form-control' value={user.data.password} />
                          </div>
                        </div>
                      </div>
                      <div className='clearfix'></div>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card card-profile'>
                  <div className='card-avatar'>
                    <a>
                      <img className='img' src='lib/images/avatar.png' />
                    </a>
                  </div>
                  <div className='content'>
                    <h6 className='category text-gray'>
                      { user.data.isVip && 
                        'VIP'
                      }
                      { !user.data.isVip && 
                        'User'
                      }
                    </h6>
                    <h4 className='card-title'>{user.data.name}</h4>
                    <p className='card-content'>
                      Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  </div>
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
  user: state.user
})

export default R.pipe(
  connect(mapStateToProps),
  isLogin
)(Profile)