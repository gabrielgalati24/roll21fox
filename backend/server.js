const express = require('express');
const mongoose = require("mongoose")

const app = express();

// Lectura y parseo del Body
app.use( express.json() );
const server = require('http').createServer(app);
const PORT = 8000;

// inicio base de datos moongose
require('./database/config_moongose').dbConnection();

// creamos y exportamos el socket
module.exports.io = require('socket.io')(server,

  {
      cors: {
    origin: "https://woler.xyz/",
    // origin: "https://cpanel-a8fd6.web.app",
    methods: ["GET", "POST"],
  },

  });


require('./sockets/socket');


server.listen( PORT, ( err ) => {

  if ( err ) throw new Error(err);

  console.log('Servidor corriendo en puerto', PORT );

});