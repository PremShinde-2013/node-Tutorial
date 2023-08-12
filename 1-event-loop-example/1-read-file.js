const { log } = require("console");
const { readFile } = require("fs");

console.log("started");
// CHECK FILE PATH
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed");
});
console.log("next task");
