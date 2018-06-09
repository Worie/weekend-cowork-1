import * as SocketIOClient from 'socket.io-client';

// initialize the socket io client on the current url 
// @TODO: do not use hardcoded url
const socket = SocketIOClient('http://localhost:8888');

// set up an event listener for our new custom socket
socket.on('news', (data: any) => {
  // say that we recieved the data
  console.log('Backend says', data);
  
  // emit the response to the interlocutor
  socket.emit('my other event', { my: 'data' });
});