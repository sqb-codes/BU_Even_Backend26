// Server + Routing
const http = require("http");
const PORT = 3000;
const username = "John";
http.createServer((request, response) => {
    if(request.url === "/") {
        response.write('<html>');
        response.write('<head><title>Node JS Example</title></head>');
        response.write(`
            <body>
                <h1>Welcome ${username}</h1>
                <h3>This is home page</h3>
            </body>
            </html>
            `);
        response.end();
    } else if(request.url === "/about") {
        response.write('<html>');
        response.write('<head><title>Node JS Example</title></head>');
        response.write(`
            <body>
                <h1>About us</h1>
                <h3>This is about us page</h3>
            </body>
            </html>
            `);
        response.end();
    } else if(request.url === "/contact") {
        response.write('<html>');
        response.write('<head><title>Node JS Example</title></head>');
        response.write(`
            <body>
                <h1>Contact Us</h1>
                <h3>This is contact page</h3>
            </body>
            </html>
            `);
        response.end();
    } else {
        response.end("Unfortunately the page you are looking for has been moved or deleted");
    }
}).listen(PORT,  () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
