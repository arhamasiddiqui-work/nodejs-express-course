//modules: if we want to export a value, (./file) wherever the module is exported

const names=require('./const');
const sayHi=require('./function');
const data=require('./twoWayModule');
require('./mindgrenade') //if only function is executed/invoked

sayHi('Arhama');
sayHi(names.john);
sayHi(names.peter);