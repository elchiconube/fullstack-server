import express from "express";

import {
  getPages,
  getPage,
  createPage,
  updatePage,
  deletePage,
} from "../controllers/contents.js";

const router = express.Router();

router.get("/", getPages);
router.post("/", createPage);
router.get("/:id", getPage);
router.patch("/:id", updatePage);
router.delete("/:id", deletePage);

export default router;
