import {
  confirmOrder,
  createOrder,
  getOrderById,
  getOrders,
  updateOrderStatus,
} from "../controllers/order/orderController.js";
import { verifyToken } from "../middleware/auth.js";

export const orderRoutes = async (fastify, options) => {
  fastify.addHook("preHandler", async (req, reply) => {
    const isAuthenticated = await verifyToken(req, reply);
    if (!isAuthenticated) {
      return reply.code(401).send({ message: "Unauthenticated" });
    }
  });

  fastify.post("/order", createOrder);
  fastify.get("/order", getOrders);
  fastify.post("/order/:orderId/status", updateOrderStatus);
  fastify.post("/order/:orderId/confirm", confirmOrder);
  fastify.patch("/order/:orderId", getOrderById);
};
