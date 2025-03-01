import express from "express";
import {
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resumeController";

const router = express.Router();

// Resume routes
router.route("/:id").get(getResumeById).put(updateResume).delete(deleteResume);

export default router;
