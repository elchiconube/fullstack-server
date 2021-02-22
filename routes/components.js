import express from "express";

import {
  getComponents,
  getComponent,
  createComponent,
  updateComponent,
  deleteComponent,
} from "../controllers/contents.js";

const router = express.Router();

router.get("/", getComponents);
router.post("/", createComponent);
router.get("/:id", getComponent);
router.patch("/:id", updateComponent);
router.delete("/:id", deleteComponent);

export default router;
