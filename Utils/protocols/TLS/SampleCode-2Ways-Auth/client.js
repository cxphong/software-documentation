#!/usr/bin/env node
'use strict';

const port = 1337;
const hostname = 'localhost';

const tls = require('tls');
var fs = require('fs');

const options = {
  host: hostname,
  port: port,

  // Necessary only if using the client certificate authentication
 // key: fs.readFileSync('client.key'),
 // cert: fs.readFileSync('client.crt'),

  // Necessary only if the server uses the self-signed certificate
  ca: fs.readFileSync('rootCA.crt')
};

var socket = tls.connect(options, () => {
  console.log('client connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  process.stdin.pipe(socket);
  process.stdin.resume();

  socket.end();
})

.setEncoding('utf8')

.on('data', (data) => {
  console.log(data);
})

.on('end', () => {
  console.log("End connection");
})

.on('error', (error) => {
  console.log(error)
});
