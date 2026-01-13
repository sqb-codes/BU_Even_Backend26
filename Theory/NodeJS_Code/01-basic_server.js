// import http from 'http';
let http = require('http');

const PORT = 9999;

http.createServer(function(req, res) {
    // Send the http header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    res.end('Hello World\n');
}).listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});