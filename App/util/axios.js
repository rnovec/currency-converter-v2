import * as axios from 'axios'

// create singleton for axios
const service = axios.create({
  baseURL: 'https://api.exchangeratesapi.io',
  mode: 'cors',
  credentials: 'same-origin',
  timeout: 20000
})

service.interceptors.request.use(config => {
  return config
})

// response interceptor
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error.response.data)
  }
)

export default service
