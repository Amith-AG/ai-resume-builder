import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import resumeRoutes from "./routes/resumeRoutes"; // Import resume routes

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5002; // Use a different port


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.send("AI Resume Builder API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
