const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());

// Memory info
console.log(os.totalmem());
console.log(os.freemem());

// CPU details
console.log(os.cpus())