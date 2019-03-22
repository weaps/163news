import axios from 'axios';

export function httpGet(url, data = {}) {
  return axios
    .get(url, {params: data})
    .then(res => {
      return Promise.resolve(res.data)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}