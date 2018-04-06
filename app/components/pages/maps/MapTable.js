import React, { Component } from 'react'
import { connect } from 'react-redux'
import R from 'ramda'
import RaisedButton from 'material-ui/RaisedButton'
import Navigator from 'lib/Navigator'
import 'styles/website.less'
import { fetchZones } from 'lib/actions/zone.js'

import MapElement from 'components/pages/maps/MapElement'

class MapTable extends Component {
  componentDidMount() {
    this.props.dispatch(fetchZones())
  }

  render() {
    const { zones } = this.props
    return (
      <div className='content'>
        <div className='container-fluid animated fadeIn'>
          <div className='row'>
              {R.values(zones).map((value, index) => {
              const imageUrl = R.values(value.imageUrl)[0]

              return (
                <div className='card'>
                  <section style={{ padding: '5px', backgroundImage: 'url("' + imageUrl + '")' }}>
                    <div className='container-fluid table-container'>
                      {/* <MapElement /> */}
                    </div>
                  </section>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  zones: state.zone.items
})

export default connect(mapStateToProps)(MapTable)
