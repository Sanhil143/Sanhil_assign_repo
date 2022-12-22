const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    rating:Number
})

module.exports = mongoose.model('author21',authorSchema)
