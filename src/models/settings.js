let appUrl = encodeURI('http://localhost:8080')
let isDev = process.env.NODE_ENV === 'development'
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
