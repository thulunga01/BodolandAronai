import { Category, SubCategory } from "../../models/index.js";

export const getAllCategories = async (req, reply) => {
  try {
    const categories = await Category.find();
    return reply.send(categories);
  } catch (error) {
    return reply.status(500).send({ message: "An Error occurred", error });
  }
};

export const createCategory = async (req, reply) => {
  const { name, imageLink, isActive = true } = req.body;
  try {
    const category = new Category({ name, imageLink, isActive });
    const savedCategory  = await category.save();
    return reply.status(200).send(savedCategory);
  } catch (error) {
    return reply.status(500).send({ message: "An Error occurred", error });
  }
};

export const getSubCategoryByCategoryId = async (req, reply) => {
  const { categoryId } = req.params;
  try {
    const subCategory = await SubCategory.find({ parentCategory: categoryId })
      .select("-parentCategory")
      .exec();
    return reply.send(subCategory);
  } catch (error) {
    return reply.status(500).send({ message: "An Error occurred", error });
  }
};
