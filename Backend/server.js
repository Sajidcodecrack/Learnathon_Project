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

// Mount the user routes under /api
app.use("/api", userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});