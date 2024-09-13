import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "",
  },
});

const Posts = models.Posts || model("Posts", PostSchema);

export default Posts;
