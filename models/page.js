import mongoose from "mongoose";
import slug from "mongoose-slug-updater";

mongoose.plugin(slug);

const pageSchema = mongoose.Schema({
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
  components: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Component",
    },
  ],
});

const Page = mongoose.model("Page", pageSchema);

export default Page;
