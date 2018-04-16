import React, { Component } from 'react'
import request from 'request-promise'

import { makeRequestOptions } from '../../lib/requestHeader'
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
    request(makeRequestOptions(this.state, 'website/contact')).then(body=>{
      if(body.code === 0){
        showNotification('topRight', 'success', 'Cảm ơn bạn đã liên hệ!')
      } else {
        showNotification('topRight', 'error', 'Đã có lỗi xảy ra!')
      }
    });
  }
  render () {
    return (
      <div className='contact'>
        <div className='container'>
          <div className='menu-top'>
            <div className='col-md-4 menu-left animated wow fadeInLeft' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <h3>Contact</h3>
              <label><i className='glyphicon glyphicon-menu-up' /></label>
              <span>There are many variations</span>
            </div>
            <div className='col-md-8 menu-right animated wow fadeInRight' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour , or randomised words which don't look even slightly believable.There are many variations by injected humour. There are many variations of passages of Lorem Ipsum available.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour , or randomised words</p>
            </div>
            <div className='clearfix' />
          </div>
          <div className='contact-top'>
            <div className='col-md-5 contact-map'>
              <h5>Google Map</h5>
              <div className='map animated wow fadeInUp' data-wow-duration='1000ms' data-wow-delay='500ms'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37494223.23909492!2d103!3d55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sin!4v1415776049771' />

              </div>
              <div className='address'>
                <h4>Address</h4>
                <p> Richard McClintock</p>
                <p>Letraset sheets </p>
                <p>ph : +123 859 6050</p>
                <p>Email : <a href='mailto:example@gmail.com'>example@gmail.com</a></p>
              </div>
            </div>
            <div className='col-md-7 contact-para animated wow fadeInDown' data-wow-duration='1000ms' data-wow-delay='500ms'>
              <h5>Contact Form</h5>
              <form >
                <div className='grid-contact'>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Name </p>
                    <input type='text' name='name' onChange={this.handleNameChange} />
                  </div>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Phone number</p>
                    <input type='text' name='phoneNumber' onChange={this.handlePhoneNumberChange}  />
                  </div>
                  <div className='clearfix' />
                </div>
                <div className='grid-contact'>
                  <div className='col-md-6 contact-grid'>
                    <p className='your-para'>Address</p>
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
                <div className='send'>
                  <input type='button' onClick={this.onSubmit} defaultValue='Send ' />
                </div>
              </form>
            </div>
            <div className='clearfix' />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
