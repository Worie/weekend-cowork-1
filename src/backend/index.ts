/**
 * This module is en entry point and the logic below shouldn't be here
 */

import 'reflect-metadata';
import * as Express from 'express';
import * as SocketIO from 'socket.io';
import * as Http from 'http';
import * as Path from 'path';

const path = Path.join(__dirname, '/dist/index.html');

// initialize Express instance 
const app = Express();

// declare static files
app.use(Express.static('dist'))

// initialize the http server basing on Express instance 
const server = new Http.Server(app);

// initialize socket io instance with given express
const io = SocketIO(server, {
  serveClient: false,
});

// add basic listener for new connetions
io.on('connection', (socket) => {
  // monit the console that something has happened
  console.log('Hello world', socket.id);

  socket.emit('news', { hello: `hello` });

  socket.on('message', (data: any) => {
    socket.broadcast.emit('news', { hello: data.message });
  });

});

// port to listen on
const SERVER_PORT = 8888;

// set express to listen on the given port
server.listen(SERVER_PORT);