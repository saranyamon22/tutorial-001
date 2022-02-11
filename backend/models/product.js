const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const { Mongoose, Schema } = require("mongoose")

const productSchema = new Schema ({
    title : String,
    content : String,
    image : String,
    author : String,
})

const ProductModel = mongoose.model('Product',productSchema)
module.exports = ProductModel