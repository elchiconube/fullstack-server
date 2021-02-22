import mongoose from "mongoose";
import express from "express";

import PageMessage from "../models/pageMessage.js";

const router = express.Router();

export const getPages = async (req, res) => {
  try {
    const pageMessages = await PageMessage.find();

    res.status(200).json(pageMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPage = async (req, res) => {
  const { id } = req.params;

  try {
    const page = await PageMessage.findById(id);

    res.status(200).json(page);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPage = async (req, res) => {
  const { title, message } = req.body;

  const newPageMessage = new PageMessage({ title, message });

  try {
    await newPageMessage.save();

    res.status(201).json(newPageMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePage = async (req, res) => {
  const { id } = req.params;
  const { title, message } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No page with id: ${id}`);

  const updatedPage = { creator, title, _id: id };

  await PageMessage.findByIdAndUpdate(id, updatedPage, { new: true });

  res.json(updatedPage);
};

export const deletePage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No page with id: ${id}`);

  await PageMessage.findByIdAndRemove(id);

  res.json({ message: "Page deleted successfully." });
};

export default router;
