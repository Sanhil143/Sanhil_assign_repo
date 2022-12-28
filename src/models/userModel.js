const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobile: String,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBT"]
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    age: Number,
    posts: {
        type: [],
        default: []
    }
}, { timestamps: true })


module.exports = mongoose.model("Sanhil_Authentication2", userSchema)