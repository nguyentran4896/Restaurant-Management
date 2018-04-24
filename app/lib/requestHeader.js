import moment from 'moment'
import md5 from 'md5'
import Store from 'lib/Store'

const apiDomainUrl = process.env.NODE_ENV === 'production' ? 'http://120.72.98.149:8000/website/v1/' : 'http://localhost:8000/website/v1/'

export const makeHeader = _ => {
  let headers = {
    'Content-Type': 'application/json',
    'Date-Time': moment.utc().format('YYYY-MM-DD hh:mm:ss'),
    'X-API-Language': 'en',
    'Uid': '',
    'Token': '',
    'Vid': ''
  }

  headers['Authorization'] = md5(md5(headers['Token'] + headers['Uid'] + headers['Date-Time']))
  return headers
}

export const makePostRequestOptions = (params, url) => ({
  method: 'POST',
  uri: apiDomainUrl + url,
  body: params,
  headers: makeHeader(),
  json: true
})

export const makeGetRequestOptions = (queries, url) => ({
  method: 'GET',
  uri: apiDomainUrl + url + queries,
  headers: makeHeader(),
  json: true
})
