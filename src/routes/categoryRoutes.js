import { createCategory, getAllCategories, getSubCategoryByCategoryId } from "../controllers/product/categoryController.js";
import { verifyToken } from "../middleware/auth.js";


export const categoryRoutes = async (fastify, options) => {
  fastify.get("/categories", getAllCategories);
};

export const subCategoryRoutes = async (fastify, options) => {
  fastify.get("/subcategories/:categoryId", getSubCategoryByCategoryId);
}

export const createCategoryRoutes = async (fastify, options) => {
  fastify.addHook("preHandler", async (req, reply) => {
    const isAuthenticated = await verifyToken(req, reply);
    if (!isAuthenticated) {
      return reply.code(401).send({ message: "Unauthenticated" });
    }

    const userRole = req.user.role;
    if (userRole !== "Admin") {
      return reply.code(403).send({ message: "Forbidden" });
    }
  });

  fastify.post("/category", createCategory)
}
