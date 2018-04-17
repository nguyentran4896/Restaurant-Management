import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import R from 'ramda'
import Draggable from 'react-draggable'

const avatarStyle = {
  backgroundImage: 'url("images/table-8-chairs.png")'
}

class MapElement extends Component {
  render() {
    return (
      <Draggable
        allowAnyClick={true}
        disabled={true}
        axis='both'
        handle='.handle'
        bounds='parent'
        defaultPosition={{x: 300, y: 300}}
        grid={[5, 5]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className='table handle'>
          <div style={avatarStyle} className='table-wrapper'>
            <input className='table-number' defaultValue={'test'} />
            <input className='table-number' readOnly value={'test'} style={{ background: 'red', color: 'white' }} />
          </div>
        </div>
      </Draggable>
    )
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(MapElement)
