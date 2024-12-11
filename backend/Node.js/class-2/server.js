// import modules
const https = require("https");
// console.log(https.Server());
// create server
const server = https.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end("Home Page");
  } else if (req.url === "/contact") {
    res.writeHead(200);
    res.end("Contact Page");
  }
});
// listen
server.listen(5000, () => {
  console.log("Server is runing on 5000");
});
