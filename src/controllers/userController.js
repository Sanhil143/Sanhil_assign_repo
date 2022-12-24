const UserModel= require("../models/userModels")


const createUser= async function (req, res) { 
    let data = req.body
    data.isFreeAppUser = req.isFreeAppUser 
    
    let savedData = await UserModel.create(data)
    res.send({msg: savedData})

}


module.exports.createUser= createUser 