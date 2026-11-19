const lash = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = lash.flattenDeep(items);
console.log(newItems);
