const express = require('express')
const router = express.Router()
const BookController = require('../controllers/bookController')
const AuthorController = require('../controllers/authorController')
const BookModel = require('../models/bookModel')
const AuthorModel = require('../models/authorModel')


router.get("/test", (req, res) => {
    res.send("check api")
})

router.post("/createBook", BookController.createBook)

router.post("/createAuthor", AuthorController.createAuthor)

router.get("/check", async (req, res) => {
    const author = await AuthorModel.findOne({ author_name: "Chetan Bhagat" });
    const id = author.author_id
    // console.error(id);
    const books = await BookModel.find({ author_id: id })
    res.send({ msg: books })
})

router.get("/find", async (req, res) => {
    const author = await BookModel.findOneAndUpdate(
        { author_name: "Two states" },
        { $set: { price: 100 } },
        { new: true })

    // res.send({msg:author})

    let authorData = await AuthorModel.find({ author_id: author.author_id }).select("author_name")

    res.send({ msg: authorData, author })
})

router.get("/bookPrice", async (req, res) => {
    let bookPrice = await BookModel.find({ price: { $gte: 50, $lte: 100 } })  // return array of object
    let result = bookPrice.map(x => x.author_id)

    let allBooks = await AuthorModel.find({ author_id: result }).select({ author_name: 1, _id: 0 })

    res.send({ msg: allBooks })


})


module.exports = router;