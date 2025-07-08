const express = require('express');
const User = require('../models/User')
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_Secret = "ExamElevateIsTheKey";
const fetch_user = require('../middleware/fetchUser');

// Route 1 : Create a User using : POST "/api/auth/createUser". No login required
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters.').isLength({min: 5}),
], async(req,res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors : errors.array() });
    }
    try {
        let success = false;
        const salt = await bcrypt.genSalt(10);
        const secured_password = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        let user = await User.create({
            name : req.body.name,
            password: secured_password,
            email: req.body.email
        })

        const data = {
            user: {
                id: user.id
            }
        }

        success = true;
        const auth_token = jwt.sign(data, JWT_Secret);
        res.json({success, auth_token});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some error occured');
    }
})

// Route 2 : Authenticating a User using : Post "/api/auth/login".
router.post('/login', [
    body('email', 'No such email exist').isEmail(),
    body('password', 'Password cannot be empty').exists(),
], async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        let success = false;
        let user = await User.findOne({email: req.body.email});

        const password_compare = await bcrypt.compare(req.body.password, user.password);
        if(!password_compare) {
            return res.status(400).json('Invalid Credentials');
        }
        const data = {
            user: {
                id: user.id
            }
        }

        success = true;
        const auth_token = jwt.sign(data, JWT_Secret);
        res.json({ success, auth_token });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error Occurred');
    }
})

// Route 3 : Get logged in User details using POST : "api/auth/getUser" . Login Required
router.post('/getUser', fetch_user, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");// Fetch every data instead of password
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error Occurred');
    }
})

module.exports = router;