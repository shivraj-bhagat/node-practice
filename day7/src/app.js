const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData')

// views folder
const viewsPath = path.join(__dirname, '../templates/views');
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// partials folder
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);

// public folder
const publicStaticDirPath = path.join(__dirname, '../public');
app.use(express.static(publicStaticDirPath));

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/weather', (req,res) => {
    const address = req.query.address;

    if(!address) return res.send({error: " You must enter address in search both"}, {});

    weatherData(address, (error, {temperature, description, cityName} = {}) => {
        if(error) {
            return res.send({
                error
            })
        }
        // console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    })
})

app.all('*', (req,res) => {
    res.status(404).render('404', {
        title: 'page not found'
    })
})

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(err) console.log(err);
    else console.log(`Server is running and listening to port ${port}...`)
})