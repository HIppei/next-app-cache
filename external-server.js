const http = require('http');

const app = http.createServer((req, res) => {
  // Make random numbers
  const random = (Math.random() * 1000).toFixed(0);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(random);
});

app.listen(3005, '127.0.0.1');
console.log('Extenral Server is running on port 3005');
