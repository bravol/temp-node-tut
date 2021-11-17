//modules
//CommonJS, every file is module {by default}
//modules - Encapsulated Code {only share minimum}

//inorder to access
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
