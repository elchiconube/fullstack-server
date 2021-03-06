import mongoose from "mongoose";
import express from "express";

import Components from "../models/component.js";

const router = express.Router();

export const getComponents = async (req, res) => {
  try {
    const components = await Components.find();

    res.status(200).json(components);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getComponent = async (req, res) => {
  const { id } = req.params;

  try {
    const component = await Components.findById(id);

    res.status(200).json(component);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createComponent = async (req, res) => {
  const { title, description, type, list } = req.body;

  const component = new Components({ title, description, type, list });

  try {
    await component.save();

    res.status(201).json(component);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateComponent = async (req, res) => {
  const { id } = req.params;
  const { title, description, type, list } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedComponents = { title, description, type, list, _id: id };

  await Components.findByIdAndUpdate(id, updatedComponents, { new: true });

  res.json(updatedComponents);
};

export const deleteComponent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Components.findByIdAndRemove(id);

  res.json({ message: "Components deleted successfully." });
};

export default router;
