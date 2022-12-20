const AuthorModel = require('../models/authorModel')


const createAuthor = async (req,res)=>{
      let authData = req.body
      let finAuth = await AuthorModel.create(authData)

      res.status(200).send({store:finAuth})
}


module.exports.createAuthor = createAuthor