let socket = {
  connect () {
    console.log('socket connected')
  },

  customEmit (val) {
    console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
  }
}

export default socket
