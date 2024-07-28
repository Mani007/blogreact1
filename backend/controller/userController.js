//const user = require('../models/user');   // connected from the databases by model files
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const user = require('../models/userModels')
const signupUser = async(req,res) =>{
    // code for signup logic
    try {
        //get the signup parameter from the body
    const { email, password} = req.body;
    // check if user already exists
    const User = await user.findOne({ email });
    if (User) return res.status(400).json({message:'email already registered'}); // check if email already exists
    // hasing the password 
    const hashedPassword = await bcrypt.hash(password, 10);  // 10 is the number of rounds for hashing
    // create user in the database
    await user.create({ email,password: hashedPassword });

    // respond after successful creation 
    res.sendStatus(200)
    
    
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
    

}

module.exports = {signupUser}