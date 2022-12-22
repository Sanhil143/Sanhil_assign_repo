const BookModel = require('../Models/bookModel')
const AuthorModel = require('../Models/authorModel')
const PublisherModel = require('../Models/publishModel')


const createBook = async (req, res) => {

      //condition-1
      let bookData = req.body
      let authorId = bookData.author
      if (!authorId)
            return res.status(401).send({ msg: "authorid error" })
      //condition-2

      let savedAuthData = await AuthorModel.findById(authorId)
      if (!savedAuthData) {
            return res.status(401).send({ msg: "Invalid author id" })
      }

      //condition-3

      let publisherId = bookData.publisher
      if (!publisherId) {
            return res.status(401).send({ msg: "publisherid error" })
      }

      //condition-4

      let savedPubData = await PublisherModel.findById(publisherId)
      if (!savedPubData) {
            return res.status(401).send({ msg: "Invalid publisher id" })
      }

      let savedData = await BookModel.create(bookData)
      res.status(200).send(savedData)

}

const fetchBook = async (req, res) => {
      let allBook = await BookModel.find().populate("author").populate("publisher")

      res.status(200).send({ msg: allBook })
}

const updatePublisher = async (req, res) => {

      let updatePub = await PublisherModel.find({name:{$in:["Penguin","Harpercollins"]
       }}).select({_id:1})

       let arr = []

       for (let i = 0; i < updatePub.length; i++) {
           let bookId = updatePub[i]._id
           arr.push(bookId)
       }
   
       let books = await BookModel.updateMany({ 
            publisher: { $in: arr } }, 
            { isHardCover: true })

       res.status(200).send({UPDATE:books})

}

const updateBook = async (req,res) =>{
      let authDetail = await AuthorModel.find({rating:{$gt:3}}).select({_id:1})

      let bookUpdate = await BookModel.updateMany({author:authDetail},
            {$set:{$inc:{price:10}}},
            {new:true}) 

            res.status(200).send({msg:bookUpdate})
}

module.exports.createBook = createBook
module.exports.fetchBook = fetchBook
module.exports.updatePublisher = updatePublisher
module.exports.updateBook = updateBook


