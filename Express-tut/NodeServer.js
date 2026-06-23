//NODE WAY OF CREATING A SERVER by http module
const http = require("http");
const {readFileSync}=require('fs');

//get all files
const homePage=readFileSync('./index.html');

const server = http.createServer((req, res) => {
// console.log(req.method);  user is trying to get req
 //console.log(req.url);  user is trying to get resource e.g: /about
  
 switch (req.url) {

    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(homePage);
      break;
   
    case "/about":
      res.end("Welcome to about page");
      break;

    case "/contact":
      res.end("Welcome to contact page");
      break;


    default:
      res.writeHead(404);
      res.end("Error Page Not found");
      break;

  //res.writeHead(status code, {then content-type: type/subtype})
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write();
      res.end();
  }
});

server.listen(3000);
console.log(`Server is running is: https://localhost:3000`);