const { createReadStream } = require("fs");
const stream = createReadStream("./Content/big.txt");
stream.on("data", (chunk) => {
  console.log(`Recieved ${chunk.length} bytes of data`);
});

// const { createReadStream } = require("fs");
const streamRead = createReadStream("./Content/big.txt", { highWaterMark: 1000 });
streamRead.on("data", (chunk) => {
  console.log(chunk);
  // console.log(chunk.length)
});
streamRead.on("error", (error) => {
  console.log(error);
});
