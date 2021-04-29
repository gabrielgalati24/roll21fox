const { io } = require('../server');


io.on("connection", socket => {
    console.log(" holaaa")
    socket.on("prueba", delta => {
      console.log('recivido',delta)
      socket.broadcast.emit("prueba1", delta)

    })
    console.log("conectado")

  })