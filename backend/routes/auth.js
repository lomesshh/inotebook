const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require('../models/User')
const {
    body,
    validationResult
    
} = require('express-validator');


// Create a user 
router.post('/createuser', [
    body('email', "Please Enter Valid Email").isEmail(),
    body('name', "Username Must Contain Atleast 3 Char").isLength({ min: 3}),
    body('password', "Password Must Contain Atleast 6 Char").isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    try {
    let user = await User.findOne({email: req.body.email});
    if(user)
    {
        return res.status(400).json({error : "Sorry user with this email is already exist"})
    }



    //password hashing
    const salt = await bcrypt.genSalt(10);
    const securePass = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
    })

    const data = {
        user :{
            id: user.id
        }
    }

    //returning JWT Token
    const JWT_SECRET = "inotebook";
    var authToken = jwt.sign(data, JWT_SECRET);
    // console.log(authToken);
    res.json({authToken})
    
}
    catch (error) {
        console.error(error.message)
        res.status(500).send("some error has been ouucred")
    }
})



// User login
router.post('/login', [
    body('email', "Please Enter Valid Email").isEmail(),
    body('password', "Password should not be Empty").exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({error: "Please Login with correct credentials"})
        }

        let passCompare = await bcrypt.compare(password, user.password)
        if(!passCompare)
        {
            return res.status(400).json({error: "Please Login with correct credentials"})
        }

        const data = {
            user :{
                id: user.id
            }
        }
    
        //returning JWT Token
        const JWT_SECRET = "inotebook";
        var authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken);
        res.json({authToken})
        
    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error has been ouucred")
    }
})

module.exports = router