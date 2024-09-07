import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageLink: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

const Category = mongoose.model("Category", categorySchema);
export default Category;
