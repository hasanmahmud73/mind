let http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('NodeJS File Uploader Checkpoint');
}).listen (80);