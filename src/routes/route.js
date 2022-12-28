const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const Middleware = require('../middlewares/commonMiddleware')



router.post('/createUser', UserController.createUser)

router.post('/loginUser', UserController.loginUser)

router.get('/getUser/:userId', Middleware.headerValidator, UserController.getUser)

router.post('/updateUser/:userId/posts', Middleware.headerValidator, UserController.updateUser)

router.delete('/deleteUser/:userId', Middleware.headerValidator, UserController.deleteUser)




module.exports = router