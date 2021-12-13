const express = require('express');
const morgan = require('morgan');

const app = express();

// routes
const people = require('./routes/people');
const auth = require('./routes/auth')

// USE Method for static and middleware
app.use(morgan('tiny'));
// parse the form data
app.use(express.urlencoded({extended: false}));
// parse json data
app.use(express.json())
// assests
app.use(express.static('./methods-public'));

// api people
app.use('/api/people', people);
app.use('/login', auth);

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