const express = require("express");
var cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json())

const mongoose = require('mongoose');
const Product = require('./models/product')
mongoose.connect('mongodb://localhost:27017/Travel', { useNewUrlParser: true }).then(() => {
    console.log("connect success")
})

//API
app.post('/addProduct', async (req, res) => {
    const payload = req.body
    let newProd = new Product(payload)
    let save = await newProd.save()
    res.send(save)
})

app.get('/findProduct', async (req, res) => {
    let result = await Product.find({})
    res.send(result)
})

app.post('/updateProduct', async (req, res) => {
    let payload = req.body
    let id = payload.id
    let data = payload.data
    await Product.updateOne({ _id: id }, data)
    let prod = await Product.find({ _id: id })
    res.send(prod)
})

app.get('/deleteProduct', async (req, res) => {
    let payload = req.query
    let id = payload.id
    await Product.deleteOne({ _id: id })
    res.send('deleted')
})



app.listen(9000)