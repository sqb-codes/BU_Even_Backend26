// Server + Routing
const http = require("http");
const PORT = 3000;
http.createServer((request, response) => {
    if(request.url === "/") {
        response.end("<h1>Welcome to Home page</h1>");
    } else if(request.url === "/about") {
        response.end("<h1>About Page</h1>");
    } else if(request.url === "/contact") {
        response.end("<h1>Contact Page</h1>");
    } else {
        response.end("Unfortunately the page you are looking for has been moved or deleted");
    }
}).listen(PORT,  () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
