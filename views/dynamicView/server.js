// Add the Express and EJS modules
import express from "express";
import ejs from "ejs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Create a new Express application instance
const app = express();

// Specify the host and port to receive requests
const host = "localhost";
const port = 8000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// Specify the app's views directory
app.set("views", join(__dirname));

/* app.set EXAMPLE:  
app.set("my name", "Oluwatobi");
const bio = app.get("my name");
console.log(bio); // Outputs: "Oluwatobi    */

// Specify the app's view engine,  app.get()->adding a key-value pair to the application's settings.
app.set("view engine", "ejs");

// Define the data object
const friendsData = {
  rommate: "Sarah",
  classmate: "Mary",
};
const replacementObject = { friends: friendsData };

// Use backticks to define a template string with embedded JavaScript( done in separate .ejs file)
// const templateString = `
// <html>
//   <body>
//     <h1>List of Friends</h1>
//     <ul>
//     <%# Loop through the friends object %>
//     <% for (const eachFriend in friends) { -%>
//       <li><%= friends[eachFriend] %> is my <%= eachFriend %></li>
//     <% } -%>
//     </ul>
//   </body>
// </html>
// `;

// Use the dynamic view as a response to 'GET /' requests
app.get("/", (req, res) => res.render("index.ejs", replacementObject));

// Run the server on the specified port and hostname
app.listen(port, host, () => {
  console.log(`Server running live at http://${host}:${port}`);
});
