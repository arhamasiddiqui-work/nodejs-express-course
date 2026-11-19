import express from "express";
import ejs from "ejs";

const app = express();
const host = "localhost";
const port = 8000;

const dataArr = ["Emily", "Mary"];
const replacementObj = { friends: dataArr };

// <%= %>
const escaping = `<%= 100+200 %>`; // 300

// <%- %>,
const unescaping = `<%- "<p>hello</p>" >`; // <p>hello</p>

// <%% %>, this shows the generated source not the browser display page
const literal = `<%% "<p><strong>Name:</strong> <em>Oluwatobi</em></p>" %>`; // <% " <p><strong>Name:</strong> <em>Oluwatobi</em></p> */} " %>

// <%# %> comment that r ignored during rendering
const comment = `<ul>
  <%# Loop through the friends array %>
  <% friends.forEach(function (friend) { _%>
  <li><%= friend %></li>
  <% }) _%>
</ul>`;

// <%= -%>,remove the newline immediately after the closing tag.
const newline = `<ul> 
<% friends.forEach(function (friend) { %>
  <li><%= friend -%> </li>
  <% }) %> </ul>`;

// <%_ %>  remove spaces/tabs immediately before opening EJS tag on the same line.

  const whitespace=`<ul>
  <%_ friends.forEach(function (friend) { %>
  <li><%= friend %></li>
  <%_ }) %>
</ul>`