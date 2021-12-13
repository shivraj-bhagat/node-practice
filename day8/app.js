const express = require('express');
const bodyParser = require('body-parser');

// express app create
const app = express();

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('Hello, word');
})

// import routes 
const employeeRoutes = require('./src/routes/employee');

// use routes
app.use('/api/v1/employee', employeeRoutes);

// port
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log(`Server is running and listening to port ${port}...`);
})