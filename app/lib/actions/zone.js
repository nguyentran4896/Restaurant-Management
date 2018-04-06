import { database } from 'database/database'
import R from 'ramda'
import async from 'async'
import * as firebase from 'firebase'

export const FETCH_ZONE_SUCCESS = 'FETCH_ZONE_SUCCESS'
export const ZONE_CHANGED = 'ZONE_CHANGED'
export const FETCH_ZONE_BEGIN = 'FETCH_ZONE_BEGIN'
export const ZONE_DELETED = 'ZONE_DELETED'

export const fetchZonesBegin = () => ({
  type: FETCH_ZONE_BEGIN
})

export const fetchZoneSuccess = items => ({
  type: FETCH_ZONE_SUCCESS,
  items: items
})

export const fetchZones = () => (dispatch) => {
  const ref = database.ref('/zones')
  ref.once('value')
    .then((snapshot) => {
      const zones = snapshot.val()
      dispatch(fetchZoneSuccess(zones))
    })
    .then(() => {
      ref.on('value', (result) => dispatch(fetchZoneSuccess(result.val())))
      ref.on('child_removed', (result) => dispatch({ type: ZONE_DELETED, item: R.assoc('id', result.key, result.val()) }))
    })
    .catch((error) => console.log(error))
}
