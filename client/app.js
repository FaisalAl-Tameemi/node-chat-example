'use strict';

$(document).ready(function(){
	const socket = io();
	// Listen to form submissions
	$('form').submit(function() {
	  const text = $('#you').val() + ' says: ' + $('#m').val();
	  socket.emit('message', text);
	  return false;
	});
	// Listen to new message from other people
	socket.on('message', function(msg) {
	  const incomingMessage = $('<li>').text(msg);
	  $('#messages').append(incomingMessage);
	});
});
