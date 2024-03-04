const http = require('http');

let count = 0;

const app = http.createServer((req, res) => {
  count += 1;
  console.log(`Request arrived ${count}`);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

app.listen(3005, '127.0.0.1');
console.log('Extenral Server is running on port 3005');
