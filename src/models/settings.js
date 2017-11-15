let isDev = process.env.NODE_ENV === 'development'
let appUrl = encodeURI(isDev ? 'http://localhost:8080' : 'https://todo.org.royallib.pw')
let baseUrl = isDev ? 'http://org.loc/' : 'https://www.org.royallib.pw/'
let authUrl = baseUrl + 'auth/?land-to=' + appUrl
let apiUrl = baseUrl + 'todo'

console.log(authUrl)
let settings = {
  env: process.env.NODE_ENV,
  authUrl: authUrl,
  apiUrl: apiUrl,
  authToken: null
}

export default settings
