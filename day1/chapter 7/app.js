const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'static','index.html'))
})

app.post('/', (req,res) => {
    console.log(req.body);
    // some database work
    // res.send('Successfully posted data');
    let data = {};
    req.body.forEach(ele => {
        if(ele.name == 'email') {
            data = {"email" : ele.value}
        } else {
            data = {
                ...data, 
                "password" : ele.value
            }
        }
    });
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    })
    Joi.validate(data, schema, (err,result) => {
        if(err) {
            console.log(err)
            res.send('an error has occurred.')
        } else {
            console.log(result)
            res.send('successfully posted data.')
        }
    })
    // res.json({success: true});
})

app.listen(3000)