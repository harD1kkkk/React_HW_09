import express from "express";
import * as FeedbackController from "../controllers/FeedbackController.mjs";

const router = express.Router();

router.get("/", FeedbackController.getAllFeedbacks);
router.post("/", FeedbackController.createFeedback);
router.delete("/:id", FeedbackController.deleteFeedback);

export default router;
