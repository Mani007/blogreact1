//const user = require('../models/user');   // connected from the databases by model files
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const user = require('../models/userModels')
const rtoken = require('../models/tokenModel')
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
const login = async (req, res) => {
    try {
        // get email and password from req.body
        const { email, password } = req.body;
        // find user by email
        const User = await user.findOne({ email });
        if (!User) return res.status(400).json({message:'email not registered'}); // check if email already exists
        // compare hashed password with the entered password
        const isMatch = await bcrypt.compare(password, User.password);
        if (!isMatch) return res.status(400).json({message:'password did not match'}); 
        // if everything matches then generate and send JWT token
        const refreshToken = jwt.sign({sub: User.email}, process.env.SECRET)
        
        const exp = Date.now() + 1000 *60 * 15    // 15 min session expiry time
        const token = jwt.sign({ sub: User._id, exp: exp }, process.env.SALT);
        // We need to write the refresh token as well and store it in the databases
        await rtoken.create({ refreshToken: refreshToken, userId: User._id })
        // we are sending the token in the response header as well as in the cookie
        // res.json({ token }); // never send token to the local storage prefer cookie
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
        // setup the cookie 
        res.cookie('Authorization', token, { expires: new Date(exp), httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
        // send the token in the cookie
        //res.json({ token }); // never send token to the local storage prefer cookie
        res.sendStatus(200)
        
    } catch (err) {
        console.error(err);
        res.status(500).send('email or password did not match');
    }

}

module.exports = {signupUser, login}