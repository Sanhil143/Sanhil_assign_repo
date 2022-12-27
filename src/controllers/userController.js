const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel")


const registerUser = async (req, res) => {
      let data = req.body
      let createData = await UserModel.create(data)
      res.status(200).send({ store: createData })
}

const loginUser = async (req, res) => {
      let userName = req.body.emailId
      let password = req.body.password

      let user = await UserModel.findOne({ emailId: userName, password: password })
      if(!user){
            res.status(500).send({Error:"emailId && password is invalid"})
      }

      let token = await jwt.sign({user:user._id.toString()}, "Sanhil-Authen")
      res.status(200).send({show:token})

}

const getUser = async (req,res) => {
      let userId = req.params.userId
      let user = await UserModel.findById(userId)
      if(!user){ 
            res.status(500).send({Error:"User is not exist"}) 
      }
      res.status(200).send({show:user})
}

const updateUser = async (req,res)=> {
      let userId = req.params.userId
      let user = await UserModel.findOneAndUpdate({_id:userId},{$set:{lastName:"Chain"}},{new:true})
      if(!user){
            res.status(500).send({Error:"User is not exist"})
      } 
      res.status(200).send({show:user})

}

const deleteUser = async (req,res)=>{
      let userId = req.params.userId
      let user = await UserModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
      if(!user){
            res.status(500).send({Error:"User is not exist"})
      }
      res.status(200).send({show:user})
} 

 
module.exports.registerUser = registerUser
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
