const express = require('express');
const path = require('path');
const logger = require('./logger');
const auth = require('./authorize');
const morgan = require('morgan');

const app = express();
const { products } = require('./data')

// USE Method for static and middleware
// req => middleware => res
// app.use([logger, auth])
// we can also limit it to setting the path of the routes
// app.use('/api', logger) this will only works for routes /api/ 

// externel morgan middleware
app.use(morgan('tiny'))

// GET Method
app.get('/', (req,res) => {
    res.send('Home');
})

app.get('/about', (req,res) => {
    console.log(req.user)
    res.send('About');
})

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