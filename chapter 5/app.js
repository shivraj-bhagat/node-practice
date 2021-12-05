const http = require('http');
const fs = require('fs');
const server = http.createServer( (req,res) => {
    // html
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'content-type': 'text/html'});
    // json
    // const readStream = fs.createReadStream('./static/example.json');
    // res.writeHead(200, {'content-type': 'application/json'});
    // image 
    // const readStream = fs.createReadStream('./static/example.jpg');
    // res.writeHead(200, {'content-type': 'image/png'});
    readStream.pipe(res);
})
server.listen(3000)