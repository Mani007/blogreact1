const express = require('express')
const {signupUser} = require('../controller/userController')
const router = express.Router()

router.post('/Signup', signupUser)

module.exports = router