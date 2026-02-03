const fs = require("fs/promises");

async function readFile() {
    const data = await fs.readFile('demo.txt');
    console.log(data);
}

readFile();