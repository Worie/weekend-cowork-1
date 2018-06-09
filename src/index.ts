/**
 * This module is en entry point and the logic below shouldn't be here
 */

import * as Express from 'express';
import * as SocketIO from 'socket.io';

// initialize Express instance 
const app = Express();

// initialize socket io instance with given express
const io = SocketIO(app);

// add basic listener for new connetions
io.on('connection', (socket) => {
  // monit the console that something has happened
  console.log('Hello world');
});

// upon visiting the root of the server
app.get('/', (req: any, res: any) => {
  // return Hello World to the user
  res.send(`Hello world`);
});

// port to listen on
const EXPRESS_PORT = 8888;

// set express to listen on the given port
app.listen(EXPRESS_PORT);

