const path = require("path");

// console.log(__dirname);

// const fullPath = path.join(
//     __dirname,   // current directory
//     "files",
//     "data.txt"
// )

// console.log("Full Path:",fullPath);

console.log(path.basename("files/data.txt"))
console.log(path.extname("files/data.txt"))