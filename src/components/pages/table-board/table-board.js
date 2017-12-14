import React, {
  Component
} from 'react'

import 'stylesheets/table-board.min.css'

import Interactive from 'components/interact/interact.js'

const draggableOptions = {
  onmove: event => {
    const target = event.target
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  },
  resiable: true
}

const avatarStyle = {
  backgroundImage: 'url(' + require('images/table-8-chairs.png') + ')'
}

const contentBackground = {
  backgroundImage: 'url(' + require('images/background.jpg') + ')',
  padding: '10px'
}

const generateTable = (tableName, status) => {
  if (status === 'Đã đặt') {
    return (
      <Interactive draggableOptions={draggableOptions}>
        <div to='' style={avatarStyle} className='table-wrapper'>
          <input className='table-number' readOnly value={tableName} style={{ color: 'black' }} />
          <select className='table-number' style={{ background: 'red', color: 'white', height: '30px' }} >
            <option>Đã đặt</option>
          </select>
        </div>
      </Interactive>
    )
  } else {
    return (
      <Interactive draggableOptions={draggableOptions}>
        <div style={avatarStyle} className='table-wrapper'>
          <input className='table-number' readOnly value={tableName} style={{ color: 'black' }} />
          <select className='table-number' style={{ background: 'green', color: 'white', height: '30px' }} >
            <option>Còn trống</option>
            <option>Đặt bàn</option>
          </select>
        </div>
      </Interactive>
    )
  }
}

class TableBoard extends Component {
  render () {
    return (
      <div className='container-fluid table-container' style={contentBackground}>
        {generateTable('Bàn 1', 'Đã đặt')}
        {generateTable('Bàn 2', 'Còn trống')}
        {generateTable('Bàn 3', 'Đã đặt')}
        {generateTable('Bàn 4', 'Còn trống')}       
      </div>
    )
  }
}
export default TableBoard
