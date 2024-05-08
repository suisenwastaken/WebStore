import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  try {
    const userId = req.user.id;
    const { deliveryPointId, homeDeliveryAddress, deliveryDate } = req.body;

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
      (total, basketDevice) =>
        total + basketDevice.device.price * basketDevice.count,
      0
    );

    const orderDetails = {
      userId: userId,
      totalPrice: totalPrice,
      deliveryPointId: deliveryPointId,
      deliveryDate: deliveryDate,
    };

    if (deliveryPointId === 1) {
      orderDetails.homeDeliveryAddress = homeDeliveryAddress;
    }

    const order = await model.Order.create(orderDetails);

    await Promise.all(
      basketDevices.map(async (basketDevice) => {
        
        await model.Device.increment("soldCount", {
          by: basketDevice.count,
          where: { id: basketDevice.device.id },
        });

        await model.OrderDevice.create({
          orderId: order.id,
          deviceId: basketDevice.device.id,
          count: basketDevice.count,
        });
      })
    );

    await model.BasketDevices.destroy({ where: { userId } });

    const createdOrder = await model.Order.findOne({
      where: { id: order.id },
      include: [{ model: model.Device }],
    });

    return res.json(createdOrder);
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

    return res.json(allOrders.reverse());
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
