const express = require('express')
const router = express.Router()
const UserController = require("../controllers/userController")
const Middleware = require("../middlewares/commonMiddleware")



router.post("/registerUser", UserController.registerUser)

router.post("/loginUser", UserController.loginUser)

router.get("/getUser/:userId", Middleware.tokenValidater,  UserController.getUser)

router.put("/updateUser/:userId", Middleware.tokenValidater, UserController.updateUser)

router.delete("/deleteUser/:userId", Middleware.tokenValidater, UserController.deleteUser)

module.exports = router