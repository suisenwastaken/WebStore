import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  const { deviceId } = req.body;
  const userId = req.user.id;

  let candidate = await model.BasketDevices.findOne({
    where: { deviceId, userId },
  });

  if (candidate) {
    await model.BasketDevices.destroy({ where: { deviceId, userId } });
    return res.json({ message: "Устройство удалено из корзины" });
  } else {
    await model.BasketDevices.create({ deviceId, userId });
    return res.json({ message: "Устройство добавлено в корзину" });
  }
}

export async function updateDeviceCount(req, res) {
  const { deviceId, count } = req.body;
  const userId = req.user.id;

  try {
    let device = await model.BasketDevices.findOne({
      where: { deviceId, userId },
    });

    if (device) {
      await device.update({ count });
      return res.json({ message: "Количество устройств обновлено" });
    } else {
      return res.status(404).json({ error: "Device not found in basket" });
    }
  } catch (error) {
    console.error("Error updating device count:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function get(req, res) {
  try {
    const userId = req.user.id;
    const basketDevices = await model.BasketDevices.findAll({
      where: { userId },
      include: [{ model: model.Device, as: "device" }],
    });

    const devices = basketDevices.map((basketDevice) => {
      const { device, count } = basketDevice;
      return { ...device.toJSON(), count };
    });

    return res.json(devices);
  } catch (error) {
    console.error("Error fetching devices from basket:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
