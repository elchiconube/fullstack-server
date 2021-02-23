import mongoose from "mongoose";

const componentSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  page: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
      required: true,
    },
  ],
  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
    },
  ],
});

const Component = mongoose.model("Component", componentSchema);

export default Component;
