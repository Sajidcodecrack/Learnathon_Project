const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes"); // Import the routes

const app = express();
const PORT = process.env.PORT || 5000;

// List of allowed origins (replace with your trusted domains)
const allowedOrigins = [
  "http://localhost:3000", // Allow local development
  "http://localhost:5173"
];

// Secure CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps, curl requests)
      if (!origin) return callback(null, true);

      // Check if the origin is in the allowed list
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow only specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
    credentials: true, // Allow credentials (e.g., cookies, authorization headers)
  })
);

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/fairbasket", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Input Validation Middleware
const validateUserInput = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Basic password validation (e.g., minimum length)
  if (password.length < 8) {
    return res.status(400).json({ error: "Password must be at least 8 characters long" });
  }

  next();
};

// Mount the user routes under /api
app.use("/api", userRoutes);

// Example of a safe query using Mongoose
app.post("/api/users", validateUserInput, async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Use Mongoose's built-in methods to safely create a new user
    const newUser = await mongoose.model("User").create({
      username,
      email,
      password, // Ensure passwords are hashed before storing in the database
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});