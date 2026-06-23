const path = require("path");
const pathSystem = require("path");

//separate file name
console.log(path.sep);

//joins file path
const filePath = path.join("/content", "subFolder", "test.txt");
console.log(filePath);

//prints end-name or basename of file
const end = path.basename(filePath);
console.log(end);

//diff environment have diff resolve
const absolute = path.resolve(__dirname, "content", "subFolder", "test.txt");
console.log(absolute);
