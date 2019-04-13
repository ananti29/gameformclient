import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `https://gameform-api-test.herokuapp.com`
  })
}
