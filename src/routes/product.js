import { getProductsByCategoryId } from "../controllers/product/productController.js";

export const productRoutes = async (fastify, options) => {
  fastify.get("/products/:categoryId", getProductsByCategoryId);
};
