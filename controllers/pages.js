import mongoose from "mongoose";
import express from "express";

import Page from "../models/page.js";

const router = express.Router();

export const getPages = async (req, res) => {
  try {
    const pages = await Page.find();
    console.log(pages);
    res.status(200).json(pages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPage = async (req, res) => {
  const { id } = req.params;

  try {
    const page = await Page.findById(id);

    res.status(200).json(page);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPage = async (req, res) => {
  const { title, description } = req.body;

  const page = new Page({ title, description });

  try {
    await page.save();

    res.status(201).json(page);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePage = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPage = { title, description, _id: id };

  await Page.findByIdAndUpdate(id, updatedPage, { new: true });

  res.json(updatedPage);
};

export const deletePage = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Page.findByIdAndRemove(id);

  res.json({ message: "Page deleted successfully." });
};

export default router;
