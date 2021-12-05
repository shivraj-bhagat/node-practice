// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana", 1,4);
// console.log(example)

const express = require('express');
const path = require('path')
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req,res) => {
    res.send('Hello, World');
})

app.get('/example', (req,res) => {
    res.send('Hitting example route');
})

app.get('/example/:name/:age', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
})

app.get('/file', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'))
})

app.listen(3000)