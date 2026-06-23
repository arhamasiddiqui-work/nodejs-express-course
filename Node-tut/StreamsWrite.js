//Streams:handle streaming data for e.g: big files

const { writeFileSync } = require("fs");
for (let i = 0; i < 1000; i++) {
writeFileSync("./Content/big.txt", `hey there ${i}\n`,
 { flag:"a" });
}
