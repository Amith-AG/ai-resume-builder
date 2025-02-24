import mongoose, { Schema, Document } from "mongoose";

// Define Resume structure
interface IResume extends Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    duration: string;
  }[];
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
}

const ResumeSchema = new Schema<IResume>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  skills: [{ type: String }],
  experience: [
    {
      company: String,
      role: String,
      duration: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      year: String,
    },
  ],
});

const Resume = mongoose.model<IResume>("Resume", ResumeSchema);
export default Resume;
