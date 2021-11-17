//npm -global command, comes with node
//npm --version

//local dependency - use only in this particular project
// npm i <packageName>

//global dependency -use it in any project
//sudo npm install -g <packageName> (mac)

//package.json -manifest file (store important infor about project/packages)
//manual approach (create package.json in the root, create properties etc)
//npm init -y (everything default)

const lodash = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = lodash.flattenDeep(items);
console.log(newItems);
