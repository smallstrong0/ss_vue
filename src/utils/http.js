import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

export default {
  post(url, data) {
    return axios({
      method: 'post',
      baseURL: 'https://smallstrong.site/api/wte_api/app/',
      url,
      data: qs.stringify(data),
      timeout: 10000,
      headers: {
      }
    }).then(
      (res) => {
        return res
      }
    )
  }
}
