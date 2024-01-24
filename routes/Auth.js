const express = require('express')
const { loginController, registerController } = require('../controller/userController')

const router = express.Router()

// routes
//Method - get
router.get('/login',loginController)

// Method - post
router.post('/register', registerController)




module.exports = router