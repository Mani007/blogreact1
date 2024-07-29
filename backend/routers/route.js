const express = require('express')
const {signupUser,login} = require('../controller/userController')
const router = express.Router()

router.post('/Signup', signupUser)
router.post('/login',login)

module.exports = router