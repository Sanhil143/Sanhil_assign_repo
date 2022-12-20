const BookModel = require('../models/bookModel')


const createBook = async (req,res)=>{
      let bookData = req.body
      let finData = await BookModel.create(bookData)
      res.status(200).send({store:finData})
}






module.exports.createBook = createBook