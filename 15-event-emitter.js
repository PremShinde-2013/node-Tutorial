const EventEmitter = require("events");
const customEmitter = new EventEmitter();

// customEmitter.on("response", () => {
//   console.log("data recived");
// });

// customEmitter.emit("response");
customEmitter.on("response", (name, age) => {
  console.log(`data recived from ${name} and with age ${age}`);
});

customEmitter.emit("response", "Prem", 19);
