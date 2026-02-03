// const fs = require("fs");

// const file = fs.createWriteStream("big_data.txt");
// for(let i = 0; i < 1000000; i++) {
//     file.write("Hello how are you...");
// }

// file.end();

const fs = require("fs");
const server = require("http").createServer();

server.on('request', (req, res) => {
    const src = fs.createReadStream("big_data.txt");
    src.pipe(res);
});

server.listen(8099);

