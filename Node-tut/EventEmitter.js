//events: on is for listening event & emit is to pass it, both the "" need to match.

const eventEmitter = require("node:events");

const customEmitter = new eventEmitter();
customEmitter.on("response", (name, id) => {
    console.log(`data recieved user ${name} with id: ${id}`);
});
// customEmitter.on("response", () => {
//   console.log(`same data 2 times`);
// });
customEmitter.emit("response", 'Arhama', 1010);
