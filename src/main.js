// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false
Vue.use(VueSocketio, 'http://localhost:8069')

/* eslint-disable no-new */
new Vue({
  sockets: {
    connect () {
      console.log('socket connected')
    },
    customEmit (val) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
