import React, {
  Component
} from 'react'

import 'stylesheets/table-board.min.css'

import Interactive from 'components/interact/interact'

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
  backgroundImage: 'url(' + require('images/table-8-chairs.jpg') + ')'
}

function example (tableName) {
  return (
    <div>
      <Interactive draggable draggableOptions={draggableOptions}>
        <div style={avatarStyle} className='table-wrapper'>
          <input className='table-number' value={tableName} />
        </div>
      </Interactive>
    </div>
  )
}

class TableBoard extends Component {
  render () {
    return (
      <div className='row table-container'>
        {example('Bàn 1')}
        {example('Bàn 2')}
        {example('Bàn 3')}
        {example('Bàn 4')}
      </div>
    )
  }
}
export default TableBoard
