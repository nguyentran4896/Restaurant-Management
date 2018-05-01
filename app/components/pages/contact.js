import React, { Component } from 'react'
import request from 'request-promise'

import { makePostRequestOptions } from '../../lib/requestHeader'
import { showNotification } from '../../lib/actions/showNotification'

class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
      address: '',
      email: '',
      message: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  
  handleNameChange(evt){
    this.setState({name: evt.target.value});
  }
  handlePhoneNumberChange(evt){
    this.setState({phoneNumber: evt.target.value});
  }
  handleAddressChange(evt){
    this.setState({address: evt.target.value});
  }
  handleEmailChange(evt){
    this.setState({email: evt.target.value});
  }
  handleMessageChange(evt){
    this.setState({message: evt.target.value});
  }
  onSubmit(){
    var name= this.state.name;
    debugger;
    request(makePostRequestOptions(this.state, 'contact')).then(body=>{
      if(body.code === 0){
        showNotification('topRight', 'success', 'Cảm ơn bạn đã liên hệ!')
      } else {
        showNotification('topRight', 'error', 'Đã có lỗi xảy ra!')
      }
    });
  }
  render () {
    return (
      <div className='content'>
        <div className='contact'>
          <div className='container'>
            <div className='menu-top'>
              <div className='col-md-4 menu-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <h3>Liên hệ</h3>
                <label><i className='glyphicon glyphicon-menu-up' /></label>
                <span>Để lại lời nhắn cho chúng tôi</span>
              </div>
              <div className='col-md-8 menu-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <p>Những đóng góp, góp ý của các bạn chính là động lực để chúng tôi ngày càng hoàn thiện dịch vụ, phát triển hơn
                  để phục vụ tốt nhất cho khách hàng.
                </p>
              </div>
              <div className='clearfix' />
            </div>
            <div className='col-md-7 contact-para animated wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <form >
                <div className='grid-contact'>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Tên</p>
                    <input type='text' name='name' onChange={this.handleNameChange} />
                  </div>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Số điện thoại</p>
                    <input type='text' name='phoneNumber' onChange={this.handlePhoneNumberChange}  />
                  </div>
                  <div className='clearfix' />
                </div>
                <div className='grid-contact'>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Địa chỉ</p>
                    <input type='text'  name='address' onChange={this.handleAddressChange}  />
                  </div>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Email</p>
                    <input type='email'  name='email' onChange={this.handleEmailChange}  />
                  </div>
                  <div className='clearfix' />
                </div>
                <p className='your-para msg-para'>MESSAGE</p>
                <textarea cols='77' name='message'  rows='6' onChange={this.handleMessageChange}  />
                <div className='send pull-right'>
                  <input type='button' onClick={this.onSubmit} defaultValue='Gửi' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
