// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socket from './models/socket'
import VueCookie from 'vue-cookie'

if (process.env.NODE_ENV === 'development') {
  Vue.config.productionTip = false
  Vue.use(VueSocketio, process.env.SOCKET_SERVER)
}
Vue.use(VueCookie)

/* eslint-disable no-new */
let app = new Vue({
  sockets: socket,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

let url = new URL(window.location.href)
let session = url.searchParams.get('laravel_session') || app.$cookie.get('laravel_session')

if (!session && !app.$cookie.get('laravel_session')) {
  let appUrl = encodeURI('http://localhost:8080')
  window.location.replace('http://org.loc/?land-to=' + appUrl + '/#/sign-in')
}

if (session) {
  app.$cookie.set('laravel_session', session)
  window.location.replace(url.origin + url.hash)
}
