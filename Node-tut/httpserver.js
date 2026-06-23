//our own server
const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      //blocking code: nested for loop
      // for (let i = 0; i < 100; i++) {
      //   for (let j = 0; j < 100; j++) {
      //     console.log(`${i} ${j} `);
      //   }
      // }

      res.end("Welcome to home page");
      break;
    case "/about":
      res.end("Welcome to about page");
      break;

    default:
      res.end("Error Page");
      break;
  }

});
server.listen(5000);
console.log(`Server is listening : https://localhost:5000`);
