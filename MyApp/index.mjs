import express from "express";
import dotenv from "dotenv";
import mongoose from "./db/connection.mjs";
import postRoutes from "./routes/PostRoutes.mjs";
import feedbackRoutes from "./routes/FeedbackRoutes.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connection.on("error", (err) => console.error(`MongoDB connection error: ${err}`));
mongoose.connection.once("open", () => console.log("Connected to MongoDB"));

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/feedbacks", feedbackRoutes);

app.get("/", (req, res) => res.send("Server is running"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
