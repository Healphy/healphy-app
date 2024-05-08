import axios from 'axios'

export const BASE_URL = 'http://localhost:5101'

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
})
