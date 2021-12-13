const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    res.end('welcome')
})

server.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server is up and running on 3000...');
    }
})