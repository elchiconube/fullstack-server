import mongoose from "mongoose";
import slug from "mongoose-slug-updater";

mongoose.plugin(slug);

const contentSchema = mongoose.Schema({
  title: String,
  description: String,
  slug: {
    type: String,
    unique: true,
    slug: "title",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Content = mongoose.model("Content", contentSchema);

export default Content;
