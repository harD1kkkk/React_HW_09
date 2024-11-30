import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const dbUrl = `mongodb+srv://${username}:${password}@cluster0.x5zb4.mongodb.net/${dbName}?retryWrites=true&w=majority`;


mongoose.connect(dbUrl)
  .then(() => console.log("MongoDB connection success"))
  .catch((error) => console.error("MongoDB connection error:", error));

export default mongoose;
