'use strict';

const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client'));

const io = require('socket.io')(server);

// Deal with real-time connections from the client
io.on('connection', function(socket){
	// Listen to new messages coming in
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
	// Print a message when a client disconnects
  socket.on('disconnect', function(){
    io.emit('message', "User disconnected");
  });
});

// Start the server and listening to requests
server.listen(process.env.PORT || 5000, process.env.IP || 'localhost', function(){
  const addr = server.address();
  console.log("Chat server running at", addr.address + ":" + addr.port);
});
