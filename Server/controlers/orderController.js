import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  try {
    const userId = req.user.id;
    const { deviceIds } = req.body;

    if (!deviceIds || deviceIds.length === 0) {
      return res
        .status(400)
        .json({ error: "No devices selected for the order" });
    }

    const existingDevices = await model.Device.findAll({
      where: { id: deviceIds },
    });

    if (existingDevices.length !== deviceIds.length) {
      return res
        .status(400)
        .json({ error: "One or more selected devices do not exist" });
    }

    const order = await model.Order.create({ userId });

    await Promise.all(
      deviceIds.map(async (deviceId) => {
        await model.OrderDevice.create({ orderId: order.id, deviceId });
      })
    );

    return res.json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function get(req, res) {
  try {
    const userId = req.user.id;

    const allOrders = await model.Order.findAll({
      where: { userId },
      include: [{ model: model.Device }],
    });

    return res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
