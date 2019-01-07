var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {


    if (request.method === 'GET' && request.url === '/hello') {

        fs.readFile("index.html", function (err,data){
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write(data);
            response.end();
            console.log(data);
        });

    } else {

        fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
      });

    }
});

server.listen(8080);
