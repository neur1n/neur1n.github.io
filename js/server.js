const http = require("http");
const fs = require("fs");
const cssPattern = /\.css$/;
const htmlPattern = /\.html$/;
const jsPattern = /\.js$/;
const pdfPattern = /\.pdf$/;
const pngPattern = /\.png$/;
const svgPattern = /\.svg$/;
const projectRoot = ".";

var server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  var file = projectRoot + req.url;

  fs.readFile(file, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write(file + " is not found!");
    } else {
      if (cssPattern.test(file)) {
        res.writeHead(200, {"content-type": "text/css"});
        res.write(data);
      } else if (htmlPattern.test(file)) {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(data);
      } else if (jsPattern.test(file)) {
        res.writeHead(200, {"content-type": "application/javascript"});
        res.write(data);
      } else if (pdfPattern.test(file)) {
        res.writeHead(200, {"content-type": "application/pdf"});
        res.write(data);
      } else if (pngPattern.test(file)) {
        res.writeHead(200, {"content-type": "image/png"});
        res.write(data);
      } else if (svgPattern.test(file)) {
        res.writeHead(200, {"content-type": "image/svg+xml"});
        res.write(data);
      }
    }
    res.end();
  });
});

server.listen(8080);
console.log("Server is listening http://localhost:8080/");
