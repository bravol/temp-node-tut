// GLOBALS - NO WINDOW !!!!

//__dirname - path to the current directory

// __filename - file name

// __require - a function to use modules (common JS)

// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log("hello dia");
}, 1000);
