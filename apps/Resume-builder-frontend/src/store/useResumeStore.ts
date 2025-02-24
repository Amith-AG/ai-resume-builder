import { create } from "zustand";

interface Resume {
  _id?: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  skills: string[];
  experience: { company: string; role: string; duration: string }[];
  education: { institution: string; degree: string; year: string }[];
}

interface ResumeStore {
  resumes: Resume[];
  setResumes: (resumes: Resume[]) => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resumes: [],
  setResumes: (resumes) => set({ resumes }),
}));
