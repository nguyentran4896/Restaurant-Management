import React, { Component } from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import request from 'request-promise'

import { isLogin } from 'components/wrappers/isLogin'
import { userHasSignedIn } from 'ducks/user'
import { makePostRequestOptions } from '../../lib/requestHeader'
import { showNotification } from '../../lib/actions/showNotification'
var moment = require("moment");
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = props.user.data;
    this.state['changpass'] = false;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleNameChange(evt){
    this.setState({name: evt.target.value});
  }


  handleBirthdayChange(evt){
    this.setState({birthday: evt.target.value});
  }

  handleGenderChange(evt){
    this.setState({gender: evt.target.value});
  }

  handlePhoneNumberChange(evt){
    this.setState({phoneNumber: evt.target.value});
  }

  handlePasswordChange(evt){
    this.setState({changpass: true})
    this.setState({password: evt.target.value});
  }

  handleSubmitForm(){
    var self= this;
    var ok = confirm('Bạn có chắc chắn muốn cập nhật thông tin?');
    if(ok){
      var userupdate = {};
      userupdate["userId"] = self.state.id;
      userupdate["email"] = self.state.email;
      userupdate["birthday"] = self.state.birthday;
      userupdate["gender"] = self.state.gender;
      userupdate["phoneNumber"] = self.state.phoneNumber;
      if(self.state.changpass){
        userupdate["password"] = self.state.password;
      }
      request(makePostRequestOptions(userupdate, 'updateUser')).then(body=>{
        if(body.code === 0){
          debugger;
          self.props.dispatch(userHasSignedIn(body.data))
          showNotification('topRight', 'success', 'Dữ liệu đã được cập nhật!')
        } else {
          showNotification('topRight', 'error', 'Đã có lỗi xảy ra!')
        }
      });
    }
    
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
                            <input type='text' className='form-control' value={this.state.name} onChange={this.handleNameChange} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Email</label>
                            <input type='email' className='form-control' value={this.state.email} />
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Ngày sinh</label>
                            <input type='date' className='form-control' value={moment(this.state.birthday).format('YYYY-MM-DD')}  onChange={this.handleBirthdayChange}/>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Giới tính</label>
                            <select className='form-control' value={this.state.gender}  onChange={this.handleGenderChange}>
                            <option value="">Chưa chọn</option>
                              <option value="Nam">Nam</option>
                              <option value="Nữ">Nữ</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>SĐT</label>
                            <input type='text' className='form-control' value={this.state.phoneNumber}  onChange={this.handlePhoneNumberChange} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Mật khẩu</label>
                            <input type='password' className='form-control' value={this.state.password} onChange={this.handlePasswordChange} />
                          </div>
                        </div>
                      </div>
                      <button type='button' className='btn btn-primary pull-right' onClick={this.handleSubmitForm}>Cập nhập thông tin</button>
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