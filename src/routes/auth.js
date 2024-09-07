import "dotenv/config";
import {
  fetchUser,
  loginCustomer,
  loginDeliveryPartner,
  refreshToken,
} from "../controllers/auth/authController.js";
import { verifyToken } from "../middleware/auth.js";
import { updateUser } from "../controllers/tracking/user.js";

export const authRoutes = async (fastify, options) => {
  fastify.post("/customer/login", loginCustomer);
  fastify.post("/delivery/login", loginDeliveryPartner);
  fastify.post("/refresh-token/login", refreshToken);
  fastify.get("/user", { preHandler: [verifyToken] }, fetchUser);
  fastify.patch("/user", { preHandler: [verifyToken] }, updateUser);
};
