import settings from './settings'
import axios from 'axios'

let request = axios.create({
  baseURL: settings.apiUrl,
  timeout: 2000,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

let todoList = {
  items: [],
  count: {
    active: 0,
    postponed: 0,
    done: 0,
    deleted: 0
  },
  getItems () {
    return request.get('')
  }
}

export default todoList
