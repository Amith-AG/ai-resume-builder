import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import resumeRoutes from "./routes/resumeRoutes"; // Import routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // Enable JSON parsing

// Routes
app.use("/api/resumes", resumeRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit process on DB connection failure
  });

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
