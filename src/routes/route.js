const express = require('express')
const router = express.Router()
const AuthorController = require('../controllers/authorController')
const PublishController = require('../controllers/publishController')
const BookController = require('../controllers/bookControllers')





router.post("/createAuthor", AuthorController.createAuthor)

router.post("/createPublisher", PublishController.createPublisher)

router.post("/createBook", BookController.createBook)

router.get("/fetchBook", BookController.fetchBook)

router.put("/updatePublisher", BookController.updatePublisher)

router.get("/updateBook", BookController.updateBook)



module.exports = router;