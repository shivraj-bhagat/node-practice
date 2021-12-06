const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root@1234',
    database: 'FakeDatabase'
})

app.get('/select', (req,res) => {
    
    db.query('SELECT * FROM countries', 
    (err, result) => {
        if(err) console.log(err);
        res.send(result);
    })
})

app.get('/insert', (req,res) => {

    let countryName = "Brazil";
    let population = 13000000;
    
    db.query('INSERT INTO countries (countryName, population) VALUES (?,?)', 
    [countryName, population],
    (err, result) => {
        if(err) console.log(err);
        res.send(result);
    })
})

app.listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Server is running and listening to port 3000');
    }
})