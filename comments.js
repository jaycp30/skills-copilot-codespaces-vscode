// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.


var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/comments') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(path.join(__dirname, 'comments.html')).pipe(res);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
    }
).listen(3000);
console.log('Server is running on http://localhost:3000');
// Now, when you run the server, it should serve the comments.html file when you visit http://localhost:3000/comments in your web browser.
