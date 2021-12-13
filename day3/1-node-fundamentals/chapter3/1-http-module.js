const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('Welcome to the home page');
        res.end();
    } else if(req.url === '/about') {
        res.write('Welcome to the about page');
        res.end();
    } else {
        res.write(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for<p>
            <a href="/">Back to home</a> 
        `)
        res.end();
    }
})

server.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server is up and running on 3000...');
    }
})