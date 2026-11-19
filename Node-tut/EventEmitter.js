//events: on is for listening event & emit is to pass it, both the "" need to match.

const eventEmitter = require("node:events");

const customEmitter = new eventEmitter();
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id: ${id}`);
});
// customEmitter.on("response", () => {
//   console.log(`same data 2 times`);
// });
customEmitter.emit("response", "Alice", 1010);

const myEE = new eventEmitter();
myEE.on("response", () => console.log("a"));
myEE.prependListener("response", (stream) => {
  console.log(`connection in the server was made by ${stream}!`);
});
myEE.emit("response", "stream user");
