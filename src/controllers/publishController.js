const PublishModel = require('../Models/publishModel')



const createPublisher = async (req,res)=>{
      let create = req.body
      let createA = await PublishModel.create(create)

      res.send({store:createA})
}


module.exports.createPublisher = createPublisher