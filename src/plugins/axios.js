import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json'
  }
})

export { axios, axiosInstance }
