const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     firstName:String,
     lastName:String,
     mobile:String,
     emailId:{
           type:String,
           required:true
     },
     password:String,
     gender:{
           type:String,
           enum:["male","female","LGBT"]
     },
     age:Number,
     isDeleted:{
           type:Boolean,
           default:false
     }
},{timestamps:true});

module.exports = mongoose.model("user-Authentication",userSchema)