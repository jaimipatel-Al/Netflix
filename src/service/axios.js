import axios from 'axios'

const axiosIns = axios.create({})

axiosIns.interceptors.request.use(config => {
  config.headers = config.headers || {
    'Content-type': 'application/json',
  }

  return config
})

// ℹ️ Add response interceptor to handle 401 response
axiosIns.interceptors.response.use(response => {
  return response
}, async error => {
  // Handle error
  return Promise.reject(error)
})

export default axiosIns
