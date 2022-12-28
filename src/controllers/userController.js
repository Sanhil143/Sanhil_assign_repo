const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
      try {
            let data = req.body
            if (Object.keys(data).length != 0) {
                  let createData = await UserModel.create(data)
                  res.status(201).send({ store: createData })
            }
            else {
                  res.status(400).send({ msg: "BAD REQUEST" })
            }
      }
      catch (err) {
            res.status(500).send({ msg: "Error", error: err.message })

      }
}


const loginUser = async (req, res) => {
      try {
            let username = req.body.emailId
            let password = req.body.password

            let user = await UserModel.findOne({ emailId: username, password: password })
            if (!user) {
                  return res.status(500).send({ Error: "username or password is wrong" })
            }
            let token = jwt.sign({ user: user._id.toString() }, "Sanhil-Authen")
            res.status(200).send({ msg: token })
      }
      catch (err) {
            res.status(500).send({ msg: "Error", error: err.message })
      }
}


const getUser = async (req, res) => {
      try {
            let userId = req.params.userId
            let findUser = await UserModel.findById(userId)
            res.status(200).send({ msg: findUser })
      }
      catch (err) {
            res.status(404).send({ msg: "Resource not found", err: err.message })
      }
}

const updateUser = async (req, res) => {
      try {
            let message = req.body.message
            let userId = req.params.userId

            let user = await UserModel.findById(userId)
            let updatedPost = user.posts
            updatedPost.push(message)


            let upUser = await UserModel.findOneAndUpdate({ _id: userId },
                  { posts: updatedPost }, { new: true })

            res.status(201).send({ msg: upUser })
      }
      catch (err) {
            res.status(500).send({ msg: "Error", error: err.message })
      }
}

const deleteUser = async (req, res) => {
      try {
            let userId = req.params.userId
            let deleteUser = await UserModel.findOneAndUpdate({ _id: userId },
                  { isDeleted: true },
                  { new: true })
            res.status(201).send({ msg: deleteUser })
      }
      catch (err) {
            res.status(500).send({ msg: "Error", error: err.message })
      }
}




module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser