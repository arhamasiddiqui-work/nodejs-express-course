const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const fileStream = fs.createReadStream("./Content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res); //transfer-encoding=chunked,  pipe is to writestreamdata in chunks
    });
    fileStream.on("error", () => {
      res.end(error);
    });
  })
  .listen(5000)
console.log(`Server is running on port: https://localhost:5000`);
