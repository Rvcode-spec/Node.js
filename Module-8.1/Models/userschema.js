const mongoose =require('mongoose')

let userschema= new mongoose.Schema({

    name:String,
    email:String,
    password:String,
    age:String,
})

module.exports = mongoose.model('User', userschema);