// CommonJS - every file is module (by default)
// MOdule - encapsulated Code(only Shared Minimum)
// used here is 4-names.js and 5-utils.js

const names = require("./4-names");
const hii = require("./5-utils");
console.log(names);
hii("Prem");
hii(names.Adi);
hii(names.Rushi);
