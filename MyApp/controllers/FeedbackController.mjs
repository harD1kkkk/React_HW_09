import Feedback from "../models/FeedbackModel.mjs";

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch feedbacks" });
  }
};

export const createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ message: "Invalid feedback data" });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!deletedFeedback) {
      return res.status(404).json({ message: "Feedback not found" });
    }
    res.json(deletedFeedback);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete feedback" });
  }
};
