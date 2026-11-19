// EJS (Embedded JavaScript templating, <%= valid javascript... %> ) is a templating language that lets you create dynamic HTML views by embedding JavaScript code within HTML templates using template tags.
import express from "express";
import ejs from "ejs";

const app = express();
const host = "localhost";
const port = 8000;

const dataArr = ["Emily", "Mary"];
const replacementObj = { friends: dataArr };



// Use backticks to define a template string with embedded JavaScript
const templateStr = `<h1>Hello, <%= friends.join(", ") %>!</h1> <p>Welcome</p>`;

// Compile and render the template string to HTML (the rendered view)
const html = ejs.render(templateStr, replacementObj);

app.get("/", (req, res) => res.send(html));

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});


