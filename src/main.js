// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socket from './models/socket'
import VueCookie from 'vue-cookie'
import settings from './models/settings'
import todoList from './models/todo.service'

todoList.getItems()

if (settings.env === 'development') {
  Vue.config.productionTip = false
  Vue.use(VueSocketio, process.env.SOCKET_SERVER)
}
Vue.use(VueCookie)

/* eslint-disable no-new */
new Vue({
  sockets: socket,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
