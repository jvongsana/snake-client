const net = require('net');
let counter = 0;

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: GMK");
    // const movement = setInterval(() => {
    //   if (counter === 10) {
    //     clearInterval(movement);
    //   }
    //   conn.write("Move: up");
    //   counter++;
    // }, 50);
  });



  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });
};



module.exports = connect;