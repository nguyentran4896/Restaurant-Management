import React, { Component } from 'react'

import 'stylesheets/feedback-modal.min.css'

class FeedbackForm extends Component {
  render () {
    return (
      <div className='modal fade' id='feedback-modal' tabIndex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='loginmodal-container'>
            <h1>Feedback</h1><br />
            <form>
              <input type='text' name='user' placeholder='Tên' />
              <input type='text' name='phone' placeholder='Số điện thoại' />
              <input type='text' name='email' placeholder='Email' />
              <textarea type='text' name='comment' id='comment-input' placeholder='Tin nhắn' />
              <input type='submit' name='login' className='login loginmodal-submit' value='Gửi' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedbackForm
