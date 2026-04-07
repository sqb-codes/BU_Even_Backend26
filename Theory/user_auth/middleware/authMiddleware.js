const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Authentication
const protect = async(req, res, next) => {
    let token;
    // console.log(req.headers.authorization);

    if(req.headers.authorization?.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            res.status(401).json({"message": "Not authorized"});
        }
    }
    if(!token) {
        res.status(401).json({"message": "No token provided..."});
    }
};

// Authorization
const authorize = (...roles) => {
    // roles = ["admin"] OR ["admin", "emp"]
    return (req, res, next) => {
        // check if user's role is included in allowed roles
        if(!roles.includes(req.user.role)) {
            // if role not allowed - forbidden access
            return res.status(403).json({
                "message": `Role (${req.user.role}) is not allowed`
            });
        }
        next();
    }
}


module.exports = {protect, authorize};