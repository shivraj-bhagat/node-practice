const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/style.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(homePage)
    } else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.end('<h1>About page</h1>')
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles)
        res.end()
    }

    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeImage)
        res.end()
    }

    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeLogic)
        res.end()
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('<h1>page not found</h1>')
    }
    
})

server.listen(3000)