const AuthorModel = require('../Models/authorModel')



const createAuthor = async (req,res)=>{
      let create = req.body
      let createA = await AuthorModel.create(create)
      res.status(200).send({store:createA})
}


module.exports.createAuthor = createAuthor