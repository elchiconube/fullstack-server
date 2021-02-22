import mongoose from "mongoose";
import express from "express";

import Content from "../models/content.js";

const router = express.Router();

export const getContents = async (req, res) => {
  try {
    const contents = await Content.find();

    res.status(200).json(contents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getContent = async (req, res) => {
  const { id } = req.params;

  try {
    const content = await Content.findById(id);

    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createContent = async (req, res) => {
  const { title, description } = req.body;

  const content = new Content({ title, description });

  try {
    await content.save();

    res.status(201).json(content);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateContent = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedContent = { title, description, _id: id };

  await Content.findByIdAndUpdate(id, updatedContent, { new: true });

  res.json(updatedContent);
};

export const deleteContent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Content.findByIdAndRemove(id);

  res.json({ message: "Content deleted successfully." });
};

export default router;
