const express = require('express');
const path = require('path');

const app = express();

// USE Method for static and middleware
app.use(express.static('./public'))

// GET Method
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     adding to static assests
//     SSR
// })

// POST Method
// PUT Method
// DELETE Method
// All Method
app.all('*', (req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

// LISTEN Method
app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Server is running and listening to port 3000...')
    }
})