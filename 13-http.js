const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write("welcomr yo home");
  //   res.end();
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quis?</p>
<a href="/">back home</a>
`);
});
server.listen(5000);
