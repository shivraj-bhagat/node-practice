const express = require('express');
const path = require('path');

const app = express();
const { products } = require('./data')

// USE Method for static and middleware

// GET Method
app.get('/', (req,res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((product) => {
        const {id,name,image} = product;
        return {id,name,image};
    })
    res.json(newProducts)
})

app.get('/api/products/:productID', (req,res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));
    if(!singleProduct) {
        return res.status(404).send('Product does not exists.');
    } 
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) => {
    console.log(req.params);
    res.send('Hello World!')
})

app.get('/api/v1/query', (req,res) => {
    // console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products]
    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit) sortedProducts = sortedProducts.slice(0,Number(limit))
    if(sortedProducts.length < 1) return res.status(200).json({status: true, data: []})
    return res.status(200).json(sortedProducts)
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