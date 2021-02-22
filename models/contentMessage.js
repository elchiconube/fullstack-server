import mongoose from "mongoose";

const contentSchema = mongoose.Schema({
  title: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ContentMessage = mongoose.model("ContentMessage", contentSchema);

export default ContentMessage;
