// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

const BASE_API_URL = process.env.REACT_APP_BASE_API

const defaultApiSauceConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
}

const api = create({
  ...defaultApiSauceConfig,
  baseURL: BASE_API_URL
})

const getApiBlogList = (filter: any) => api.get('/blogs', filter)

export { getApiBlogList }
