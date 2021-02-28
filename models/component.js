import mongoose from "mongoose";

const componentSchema = mongoose.Schema({
  type: String,
  title: String,
  description: String,
  lists: { type: Array, default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Component = mongoose.model("Component", componentSchema);

export default Component;
