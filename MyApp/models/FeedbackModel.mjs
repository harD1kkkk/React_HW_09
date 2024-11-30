import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  rate: { type: Number, required: true, min: 1, max: 5 },
});

export default mongoose.model("Feedback", feedbackSchema);
