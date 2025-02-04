const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    price: String,

})

module.exports = mongoose.model('add-products', ProductSchema)