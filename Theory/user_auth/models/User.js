const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: 3
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 5
    },
    role: {
        type: String,
        enum: ["Admin", "Emp", "Customer"],
        default: "Emp"
    }
},
{timestamps: true}
);

module.exports = mongoose.model("User", userSchema);