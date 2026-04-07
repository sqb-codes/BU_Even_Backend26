const express = require("express");
const router = express.Router();

const {registerUser, loginUser, getProfile} = require("../controller/authController");
const {protect, authorize} = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

// Admin-only routes
router.get("/admin", protect, authorize("Admin"), (req, res) => {
    res.json({message: "Welcome Admin..."});
})

// User-only Role
router.get("/user", protect, authorize("Emp"), (req, res) => {
    res.json({message: "Welcome Emp..."});
})

// Multiple roles - shared
router.get("/shared", protect, authorize("Admin", "Emp"), (req, res) => {
    res.json({message: "Welcome..."});
})

module.exports = router;