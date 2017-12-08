import React, { Component } from 'react'

class Events extends Component {
  render () {
    return (
      <section id='content'>
        <div className='content-wrap'>
          <div className='container clearfix'>
            <div className='col-sm-12 col-sm-offset-0 col-md-6 col-md-offset-3 nobottommargin'>
              <h3>Phản hồi về dịch vụ của chúng tôi!</h3>
              <form id='conditional-form' action='#' method='post' className='nobottommargin'>
                <div className='col_full'>
                  <label htmlFor='form-condition-1'>Nhập tên</label>
                  <input type='text' className='sm-form-control required' id='form-condition-1' name='form-condition-1' />
                </div>
                <div className='col_full' id='form-condition-2-wrap'>
                  <label htmlFor='form-condition-2'>Nhập Email</label>
                  <input type='email' className='sm-form-control required email' id='form-condition-2' name='form-condition-2' />
                </div>
                <div className='col_full' id='form-condition-5-wrap'>
                  <label htmlFor='form-condition-5'>Nhập tin nhắn</label>
                  <textarea className='sm-form-control required' id='form-condition-5' name='form-condition-5' rows='5' col='20' placeholder='' />
                </div>
                <div className='col_full' id='form-condition-submit'>
                  <button className='button button-3d nomargin' type='submit'>Gửi</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Events
