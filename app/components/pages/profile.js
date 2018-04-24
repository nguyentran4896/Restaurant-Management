import React, { Component } from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import request from 'request-promise'

import { isLogin } from 'components/wrappers/isLogin'
import { userHasSignedIn } from 'ducks/user'
import { makePostRequestOptions } from '../../lib/requestHeader'
import { showNotification } from '../../lib/actions/showNotification'
var md5 = require('md5');
var moment = require('moment');
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = props.user.data;
    this.state['changpass'] = false;
    this.state['newPass'] = '';
    this.state['confirmPass'] = '';
    this.state['passInput'] = '';
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.changStatusChangePass = this.changStatusChangePass.bind(this);
    this.handleNewPassChange = this.handleNewPassChange.bind(this);
    this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
    this.handlePassInputChange = this.handlePassInputChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
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

  
  handleNewPassChange(evt){
    this.setState({newPass: evt.target.value});
  }

  handleConfirmPassChange(evt){
    this.setState({confirmPass: evt.target.value});
  }

  handlePassInputChange(evt){
    this.setState({passInput: evt.target.value});
  }

  changStatusChangePass(){
    this.setState({changpass:!this.state.changpass})
  }

  resetForm(){
    this.setState(this.props.user.data)
    this.setState({newPass: '',
      passInput: '',
      confirmPass: '',
      changpass: this.state.changpass
    });
  }

  handlePasswordChange(){
    if(this.state.passInput === '' || this.state.newPass === '' && this.state.confirmPass === '') {
      showNotification('topRight', 'error', 'Input New Password, Confirm Password and Password is required!')
    } else if(md5(this.state.passInput) !== this.state.password) {
      showNotification('topRight', 'error', 'Password incorrect!')
    } else if(this.state.newPass !== this.state.confirmPass) {
      showNotification('topRight', 'error', 'New password not match!')
    } else {
      var ok = confirm('Bạn có chắc chắn muốn cập nhật thông tin?');
      var self = this;
      if(ok) {
        request(makePostRequestOptions({userId: this.state.id, password: this.state.newPass}, 'updateUser')).then(body=>{
          if(body.code === 0){
            self.props.dispatch(userHasSignedIn(body.data))
            showNotification('topRight', 'success', 'Dữ liệu đã được cập nhật!')
            this.setState({changpass: false})
          } else {
            showNotification('topRight', 'error', 'Đã có lỗi xảy ra!')
          }
        });
      }
    }
  }

  handleSubmitForm(){
    var self= this;
    var ok = confirm('Bạn có chắc chắn muốn cập nhật thông tin?');
    if(ok){
      var userupdate = {};
      userupdate['userId'] = self.state.id;
      userupdate['name'] = self.state.name;
      userupdate['birthday'] = self.state.birthday;
      userupdate['gender'] = self.state.gender;
      userupdate['phoneNumber'] = self.state.phoneNumber;
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
                            <label className='control-label'>Full Name</label>
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
                            <label className='control-label'>Birthday</label>
                            <input type='date' className='form-control' value={moment(this.state.birthday).format('YYYY-MM-DD')}  onChange={this.handleBirthdayChange}/>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Gender</label>
                            <select className='form-control' value={this.state.gender}  onChange={this.handleGenderChange}>
                            <option value=''>Chưa chọn</option>
                              <option value='Nam'>Nam</option>
                              <option value='Nữ'>Nữ</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Phone Number</label>
                            <input type='text' className='form-control' value={this.state.phoneNumber}  onChange={this.handlePhoneNumberChange} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>&nbsp;</label>
                            {/* <input type='password' className='form-control' value={this.state.password} onChange={this.handlePasswordChange} /> */}
                            
                            <button className='btn btn-warning form-control' type="button" onClick={this.changStatusChangePass}>{this.state.changpass?'Hủy':'Đổi mật khẩu'}</button>
                          </div>
                        </div>
                      </div>
                      {this.state.changpass &&
                        <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>New Password</label>
                            <input type='password' className='form-control' value={this.state.newPass} onChange={this.handleNewPassChange} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Confirm Password</label>
                            <input type='password' className='form-control' value={this.state.confirmPass} onChange={this.handleConfirmPassChange} />
                          </div>
                        </div>
                      </div>
                      }
                      {this.state.changpass &&
                        <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>Password</label>
                            <input type='password' className='form-control' value={this.state.passInput}  onChange={this.handlePassInputChange} />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group label-floating'>
                            <label className='control-label'>&nbsp;</label>
                            <button className='btn btn-danger form-control' type="button" onClick={this.handlePasswordChange}>Change Password</button>
                          </div>
                        </div>
                      </div>
                      }
                      <div className='row' >
                        <div className='col-md-6'>
                          <div className='form-group'>
                            <button type='button' className='btn btn-default form-control pull-right' onClick={this.resetForm} >Reset Input</button>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <button type='button' className='btn btn-primary form-control pull-right' onClick={this.handleSubmitForm}>Update Profile</button>
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
            <div class='row'>
              <h3>Lịch sử thanh toán</h3>
              <hr/>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Nội dung thanh toán</th>
                    <th>Thời gian thanh toán</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Thanh toán 1</td>
                    <td>2018-03-08</td>
                    <td> 1.000.000 đ</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Thanh toán 2</td>
                    <td>2018-02-14</td>
                    <td> 1.500.000 đ</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Thanh toán 3</td>
                    <td>2018-01-01</td>
                    <td> 1.000.000 đ</td>
                  </tr>
                </tbody>
              </table>
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