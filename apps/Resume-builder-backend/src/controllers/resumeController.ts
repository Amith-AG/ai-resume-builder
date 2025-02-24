import { Request, Response } from "express";
import Resume from "../models/Resume";

// Create a new resume
export const createResume = async (req: Request, res: Response) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Error creating resume", error });
  }
};

// Get all resumes
export const getResumes = async (req: Request, res: Response) => {
  try {
    const resumes = await Resume.find({});
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resumes", error });
  }
};
