// http module
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to ur home page");
  }
  if (req.url === "/about") {
    res.end("wlecome to about page");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>
  we cannot see the page you are looking for</p>
  <a href="/">Back Home</a>
  `);
});
//what port will a server listen to
server.listen(5100);
