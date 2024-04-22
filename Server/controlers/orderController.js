import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  try {
    const userId = req.user.id;

    const basketDevices = await model.BasketDevices.findAll({
      where: { userId },
      include: [{ model: model.Device }],
    });

    if (!basketDevices || basketDevices.length === 0) {
      return res
        .status(400)
        .json({ error: "No devices in the basket for the order" });
    }

    const totalPrice = basketDevices.reduce(
      (total, basketDevice) => total + basketDevice.device.price * basketDevice.count,
      0
    );

    const order = await model.Order.create({ userId, totalPrice });

    await Promise.all(
      basketDevices.map(async (basketDevice) => {
        await model.OrderDevice.create({ 
          orderId: order.id, 
          deviceId: basketDevice.device.id,
          count: basketDevice.count
        });
      })
    );

    await model.BasketDevices.destroy({ where: { userId } });

    return res.json({ message: "Заказ размещен", order });
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
