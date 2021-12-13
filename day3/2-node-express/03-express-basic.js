const express = require('express');

const app = express();

// GET Method
app.get('/', (req,res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req,res) => {
    res.status(200).send('About Page')
})

// POST Method
// PUT Method
// DELETE Method
// All Method
app.all('*', (req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

// USE Method

// LISTEN Method
app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Server is running and listening to port 3000...')
    }
})