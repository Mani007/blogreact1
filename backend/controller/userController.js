//const user = require('../models/user');   // connected from the databases by model files
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const signupUser = (req,res) =>{
    // code for signup logic
    //get the signup parameter from the body
    const { email, password} = req.body;
    // check if user already exists

    console.log(email, password)
    // if user dont exist, create the user in the database
    // hash the password using bcrypt
    res.sendStatus(200)

}

module.exports = {signupUser}