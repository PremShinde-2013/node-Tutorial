const { createReadStream } = require("fs");
const { getDefaultHighWaterMark } = require("stream");

// const stream = createReadStream("./content/big.txt");

// stream.on("data", (result) => {
//   console.log(result);
// });
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  // encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
