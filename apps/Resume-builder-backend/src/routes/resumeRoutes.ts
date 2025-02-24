import express from "express";
import { createResume, getResumes } from "../controllers/resumeController";

const router = express.Router();

router.post("/", createResume);
router.get("/", getResumes);

export default router;
