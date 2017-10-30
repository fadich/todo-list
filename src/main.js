// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socket from './models/socket'

Vue.config.productionTip = false
Vue.use(VueSocketio, process.env.SOCKET_SERVER)

/* eslint-disable no-new */
new Vue({
  sockets: socket,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
