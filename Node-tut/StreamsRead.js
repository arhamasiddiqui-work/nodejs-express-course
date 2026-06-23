// const { createReadStream } = require("fs");
// const stream = createReadStream("./Content/big.txt");
// stream.on("data", (chunk) => {
//   console.log(`Recieved ${chunk.length} bytes of data`);
// });

const { createReadStream } = require("fs");
const stream = createReadStream("./Content/big.txt", { highWaterMark:3000 });
stream.on("data", (chunk) => {
  console.log(chunk);
});
stream.on('error',(error)=>{
    console.log(error);
})


