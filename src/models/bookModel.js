const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    authorName: String,
    tags: [String],
    year: Number,

    isPublished: {
        type: Boolean, //Boolean
        default: false
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {
        type: Number,
        default: 0
    },
    completionDate: Date,
    totalPage: Number,
    stockAvailable: Boolean
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
