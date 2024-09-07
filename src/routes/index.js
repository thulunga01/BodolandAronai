import { authRoutes } from "./auth.js";
import { categoryRoutes, createCategoryRoutes, subCategoryRoutes } from "./categoryRoutes.js";
import { orderRoutes } from "./orderRoutes.js";
import { productRoutes } from "./product.js";

const prefix = "/api";

export const registerRoutes = async (fastify) => {
  fastify.register(authRoutes, { prefix: prefix });
  fastify.register(productRoutes, { prefix: prefix });
  fastify.register(categoryRoutes, { prefix: prefix });
  fastify.register(orderRoutes, { prefix: prefix });
  fastify.register(subCategoryRoutes, { prefix: prefix });
  fastify.register(createCategoryRoutes, { prefix: prefix });
};
