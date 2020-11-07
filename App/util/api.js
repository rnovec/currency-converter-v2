import request from './axios'

export function api(base) {
  return request({
    url: '/latest',
    method: 'GET',
    params: {
      base
    }
  })
}
