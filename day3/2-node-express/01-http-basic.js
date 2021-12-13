const http = require('http');

const server = http.createServer((req,res) => {
    // console.log('user hit the server');
    // console.log(req.url)
    const url = req.url;
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h1>Home page</h1>')
    } else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h1>About page</h1>')
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('<h1>page not found</h1>')
    }
    
})

server.listen(3000)