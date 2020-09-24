const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: GMK");
  });
  return conn;
};

module.exports = connect;