const fs = require("fs");

// fs.writeFile(
//     "data.txt", 
//     "Welcome to NodeJS",
//     (error) => {
//         if(error) {
//             console.log("Error",error);
//         } else {
//             console.log("File written successfully...");
//         }
//     }
// )

// fs.readFile(
//     "data.txt",
//     "utf-8",    // convert buffer to readable text
//     (error, data) => {
//         if(error) {
//             console.log("Error while reading",error);
//         } else {
//             console.log(data);
//         }
//     }
// )



fs.appendFile(
    "data.txt", 
    "\nThis is new text",
    (error) => {
        if(error) {
            console.log("Error",error);
        } else {
            console.log("File written successfully...");
        }
    }
)

// Synchronous fs read
const data = fs.readFileSync('demo.txt');
console.log(data);
console.log("Done file reading...");


// Asynchronoud fs read
fs.readFile(
    "data.txt",
    "utf-8",    // convert buffer to readable text
    (error, data) => {
        if(error) {
            console.log("Error while reading",error);
        } else {
            console.log(data);
        }
    }
)

