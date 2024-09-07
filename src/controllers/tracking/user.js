import { Customer, DeliveryPartner } from "../../models/index.js";

export const updateUser = async (req, reply) => {
  try {
    const { userId } = req.user;
    const updateData = req.body;

    let user =
      (await Customer.findById(userId)) ||
      (await DeliveryPartner.findById(userId));

    if (!user) {
      return reply.status(404).send({ message: "User not Found" });
    }

    let userModel;
    if (user.role === "Customer") {
      userModel = await Customer;
    } else if (user.role === "DeliveryPartner") {
      userModel = await DeliveryPartner;
    } else {
      return reply.status(400).send({ message: "Invalid Role" });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return reply.status(404).send({ message: "User not found" });
    }

    return reply.send({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to update the user", error });
  }
};
