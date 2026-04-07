const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password, role} = req.body;
        
        // Check if user exists
        const userExists = await User.findOne({email});  // Get email from DB
        if(userExists) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        // Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create user object
        const user = await User.create({
            name, email, password:hashPassword, role:role
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })

    } catch (error) {
        return res.status(500).json({
                message: "User failed to register",
                error: error.message
            })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        
        if(user && (await bcrypt.compare(password, user.password))) {
            res.json({
                message: "Login success",
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        }
    } catch (error) {
        return res.status(500).json({
                message: "User failed to login",
                error: error.message
            })
    }
}

exports.getProfile = async (req, res) => {
    res.json(req.user);
}