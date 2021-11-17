//file modules sync or non blocking
const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);
//creating new file
//if the file is not there, node will create it and if it is there then node will overwrite the contents

writeFileSync(
  "./content/result-sync.txt",
  `HERE IS THE RESULT: ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("Starting the next one");
