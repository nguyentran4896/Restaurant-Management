import React, { Component } from 'react'
import R from 'ramda'
import { Link } from 'react-router'
import moment from 'moment'

import { isAdmin } from 'components/wrappers/isAdmin'
import { showConfirmAlertDeleteItem } from '../../../lib/actions/showNotification'

class TableViewItem extends Component {
  render() {
    const { items, itemIndex, deleteItem, viewLabelHeader, viewHeader, data, subHeader, arrLink, dispatch } = this.props

    return (
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
            <div className='card'>
              <div className='card-header' data-background-color='purple'>
                <h4 className='title'>{viewHeader}</h4>
                <p className='category'>{subHeader}</p>
              </div>
              <div className='card-content'>
                <div style={{ textAlign: 'center' }}>
                  <Link to={arrLink.list} className='btn btn-success btn-round' style={style.buttonMargin}>
                    Trở lại
                  </Link>
                  <Link to={arrLink.edit + '?index=' + itemIndex} className='btn btn-primary btn-round' style={style.buttonMargin}>
                    Chỉnh sửa dữ liệu
                  </Link>
                  <button onClick={showConfirmAlertDeleteItem(deleteItem, items[itemIndex].id, dispatch, itemIndex, 'view')} type='button' className='btn btn-danger btn-round' style={style.buttonMargin}>
                    Xóa dữ liệu
                  </button>
                </div>
                <form>
                  {viewLabelHeader.map((item, index) => {
                    if (item.fieldName === 'createdAt' || item.fieldName === 'updatedAt') {
                      data[item.fieldName] = moment.utc(data[item.fieldName]).add(7, 'hours').format('YYYY-MM-DD hh:mm:ss')
                    } else if (item.fieldName === 'birthday') {
                      data[item.fieldName] = moment.utc(data[item.fieldName]).add(7, 'hours').format('YYYY-MM-DD')
                    }

                    if (item.fieldName === 'description') {
                      return (
                        <div className='col-md-12' key={index}>
                          <div className='form-group label-floating' style={{ marginTop: '0' }}>
                            <label>{item.viewTitle}</label>
                            <div className='form-control' dangerouslySetInnerHTML={{ __html: data[item.fieldName] }} style={{ height: 'auto' }}/>
                          </div>
                        </div>
                      )
                    }

                    return (
                      <div className='col-md-6' key={index}>
                        <div className='form-group label-floating' style={{ marginTop: '0' }}>
                          <label>{item.viewTitle}</label>
                          <div className='form-control'>{data[item.fieldName]}</div>
                        </div>
                      </div>
                    )
                  })}
                </form>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default R.pipe(
  isAdmin
)(TableViewItem)

const style = {
  buttonMargin: {
    margin: '5px 15px 10px 15px'
  }
}
