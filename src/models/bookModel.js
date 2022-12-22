const mongoose = require('mongoose');
const objectID = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name:String,
    author:{
          type:objectID,
          ref:"author21"
    },
    publisher:{
          type:objectID,
          ref:"publisher21"
    },
    price:Number,
    rating:Number,
    isHardCover:{
          type:Boolean,
          default:false
    }

},{timestamps:true})

module.exports = mongoose.model("book21",bookSchema)
