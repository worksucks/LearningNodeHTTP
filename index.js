var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {


    if (request.method === 'GET' && request.url === '/hello') {

        fs.readFile("index.html", function (err,data){
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write(data);
            response.end();
        });

    } else {

        fs.readFile("test.png", "binary", function(error, file) {

        response.setHeader("Content-Type", "image/png");
        //response.writeHead(404, {"Content-Type": "image/png"});
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.statusCode =404;
        //response.write("<h1>404 Not Found\n</h1>");
        response.write(file, "binary");

        response.end();
      });

    }
});

server.listen(8080);
