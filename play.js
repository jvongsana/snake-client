const connect = require('./client');
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  const handleUserInput = stdin.on('data', (data) => {
    if (data == '\\q\n') {
      process.exit();
    }
    stdin.resume();
    setupInput();
  });
  return stdin;
};