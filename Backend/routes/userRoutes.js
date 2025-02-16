const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Define the /signup route
router.post("/signup", async (req, res) => {
  try {
    const { uid, fullName, email, password } = req.body;

    if (!uid || !fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({ uid, fullName, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", error });
  }
});

module.exports = router;