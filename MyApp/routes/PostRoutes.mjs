import express from "express";
import * as PostController from "../controllers/PostController.mjs";

const router = express.Router();

router.get("/", PostController.getAllPosts);
router.post("/", PostController.createPost);
router.delete("/:id", PostController.deletePost);

export default router;
