const http = require('http');
const server = http.createServer( (req,res) => {
    if(req.url === '/') {
        res.write('Hello from Node js');
        res.end();
    } else {
        res.write('using some other route');
        res.end();
    }
})
server.listen(3000)