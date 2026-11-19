const path = require("path");
// const pathSystem = require("path");

//returns the separator used by the os. windows: \ , linux: /
console.log(path.sep);

// Join path segments
const filePath = path.join("/content", "subFolder", "test.txt");
console.log(filePath);

//Returns the last portion of a path
const end = path.basename(filePath);
console.log(end);

//diff environment have diff resolve, determines the absolute location
const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");
console.log(absolute);
