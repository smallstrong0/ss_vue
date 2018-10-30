import request from '../utils/request'
export default function(query) {
  return request({
    url: '/article/listproject/0/json',
    method: 'get',
    params: query
  })
}
