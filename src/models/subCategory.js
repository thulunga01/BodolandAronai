import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageLink: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const SubCategory = mongoose.model("subCategory", subCategorySchema);
export default SubCategory;
