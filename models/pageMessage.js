import mongoose from "mongoose";

const pageSchema = mongoose.Schema({
  title: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PageMessage = mongoose.model("PageMessage", pageSchema);

export default PageMessage;
