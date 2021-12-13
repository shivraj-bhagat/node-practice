const express = require('express');
const morgan = require('morgan');

const app = express();
const { people } = require('./data')

// USE Method for static and middleware
app.use(morgan('tiny'));
// parse the form data
app.use(express.urlencoded({extended: false}));
// parse json data
app.use(express.json())
// assests
app.use(express.static('./methods-public'));

// GET Method
app.get('/api/people', (req,res) => {
    return res.status(200).json({success: true, data: people})
})

// POST Method
app.post('/login', (req,res) => {
    const { name } = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    } else {
        return res.status(401).send('Please provide credentials');    
    }
})

app.post('/api/people', (req,res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide your name'})
    }
    return res.status(201).json({success: true, person: name})
})

app.post('/api/postman/people', (req,res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide your name'})
    }
    return res.status(201).json({success: true, data: [...person, name]})
})

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