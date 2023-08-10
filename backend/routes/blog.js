import express from "express";
import { addBlog, getBlogs } from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlogs);

router.post("/", addBlog);

export default router;
