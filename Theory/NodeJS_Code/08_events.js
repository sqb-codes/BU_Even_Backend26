const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("login", (username) => {
//     console.log(`User : ${username} logged in...`);
// });

// emitter.emit("login", "John");

// Multiple events
// emitter.on("order", () => {
//     console.log('Order placed...');
// });

// emitter.on("order", () => {
//     console.log('Sending confirmation mail...');
// });

// emitter.emit("order");


// Execute only one time
emitter.once("payment", () => {
    console.log('Payment processed...');
});

emitter.emit("payment");
emitter.emit("payment");