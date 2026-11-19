//async: take time, non-blocking, not linebyline, get offload.
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFile("./Content/first.txt", "utf-8");
//     const second = await readFile("./Content/second.txt", "utf-8");
//     await writeFile(
//       "./Content/ResultAsync.txt",
//       `\n WRITING NEW FILE: ${first}${second}`,
//       {flag: 'a'}
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

const start = async () => {
  try {
    const first = await readFile("./Content/first.txt", "utf-8");
    const second = await readFile("./Content/second.txt", "utf-8");
    await writeFile(
      "./Content/ResultAsync.txt",
      `\n Writing new file ${first} ${second}`,
      { flag: "a" },
    );
    console.log(first, second);

    const third = await readFile("./Content/ResultAsync.txt", "utf-8");
    console.log(third);
  } catch (err) {
    console.log(err);
  }
};
start();
