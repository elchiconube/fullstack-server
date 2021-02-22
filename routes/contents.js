import express from "express";

import {
  getContents,
  getContent,
  createContent,
  updateContent,
  deleteContent,
} from "../controllers/contents.js";

const router = express.Router();

router.get("/", getContents);
router.post("/", createContent);
router.get("/:id", getContent);
router.patch("/:id", updateContent);
router.delete("/:id", deleteContent);

export default router;
