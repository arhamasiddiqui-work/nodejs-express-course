const operatingSystem = require("os");

//info abt current user
const user = operatingSystem.userInfo();
console.log(user);
//method return system uptime in seconds
console.log(`the system uptime is ${operatingSystem.uptime()} seconds`);
//more built in  modules methods
const currentOs = {
  type: operatingSystem.type(),
  release: operatingSystem.release(),
  totalMem: operatingSystem.totalmem(),
  freeMem: operatingSystem.freemem(),
};
console.log(currentOs);
