const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request event");
  res.aend("hello");
});
server.listen(5000, () => {
  console.log("server listening at port : 5000...");
});
