import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  try {
    const userId = req.user.id;
    const { deviceIds } = req.body;
    // Создаем заказ для пользователя
    // Проверяем, есть ли идентификаторы устройств в теле запроса
    if (deviceIds && deviceIds.length > 0) {
      const order = await model.Order.create({ userId });
      // Для каждого идентификатора устройства создаем связь с заказом
      await Promise.all(
        deviceIds.map(async (deviceId) => {
          await model.OrderDevice.create({ orderId: order.id, deviceId });
        })
      );
      return res.json({ message: "Order created successfully", order });
    }
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
