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

// button upon which we'll do something
const sendButton: HTMLButtonElement = document.querySelector('.send-btn');

// the input for the user to enter his text
const sendInput: HTMLInputElement = document.querySelector('.send-input');

// upon clicking on the button
sendButton.addEventListener('click', (e: Event) => {

  // get the current value of the input 
  let inputValue = sendInput.value;

  socket.emit('message', { message: inputValue });
})