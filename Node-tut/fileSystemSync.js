//sync : line by line
const { readFileSync, writeFileSync } = require("fs");

console.log('start');

const first = readFileSync("./Content/first.txt", "utf-8");
const second = readFileSync("./Content/second.txt", "utf-8");

//node create a default file by this sync way
writeFileSync(
  "./Content/resultSync.txt",
  `\nHere is the result: ${first}, ${second}`,
  { flag: "a" }, //to append file again
);

const third = readFileSync("./Content/resultSync.txt", "utf-8");

console.log('done with this task');

console.log('Result', third);
