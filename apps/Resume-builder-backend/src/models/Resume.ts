import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  skills: { type: [String], required: true },
});

const Resume = mongoose.model("Resume", ResumeSchema);
export default Resume;
