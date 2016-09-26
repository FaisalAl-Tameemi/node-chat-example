'use strict';

$(document).ready(function(){
	const socket = io();
	// Listen to form submissions
	$('form').submit(function() {
	  const text = $('#m').val();
	  socket.emit('message', text);
	  $('#m').val('');
	  return false;
	});
	// Listen to new message from other people
	socket.on('message', function(msg) {
	  const incomingMessage = $('<li>').text(msg);
	  $('#messages').append(incomingMessage);
	});
});
