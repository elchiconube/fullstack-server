import mongoose from "mongoose";
import express from "express";

import ContentMessage from "../models/contentMessage.js";

const router = express.Router();

export const getContents = async (req, res) => {
  try {
    const postMessages = await ContentMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getContent = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await ContentMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createContent = async (req, res) => {
  const { title, message } = req.body;

  const newContentMessage = new ContentMessage({ title, message });

  try {
    await newContentMessage.save();

    res.status(201).json(newContentMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateContent = async (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedContent = { creator, title, _id: id };

  await ContentMessage.findByIdAndUpdate(id, updatedContent, { new: true });

  res.json(updatedContent);
};

export const deleteContent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await ContentMessage.findByIdAndRemove(id);

  res.json({ message: "Content deleted successfully." });
};

export default router;
