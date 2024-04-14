import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  const { deviceId } = req.body
  const userId = req.user.id;

  let candidate = await model.BasketDevices.findOne({
    where: { deviceId, userId },
  });

  if (candidate) {
    await model.BasketDevices.destroy({ where: { deviceId, userId } });
    return res.json({ message: "Device removed from basket" });
  } else {
    await model.BasketDevices.create({ deviceId, userId });
    return res.json({ message: "Device added to basket" });
  }
}

export async function get(req, res) {
  try {
    const userId = req.user.id;
    const basketDevices = await model.BasketDevices.findAll({
      where: { userId },
      include: [{ model: model.Device, as: "device" }],
    });

    const devices = basketDevices.map((basketDevice) => basketDevice.device);

    return res.json(devices);
  } catch (error) {
    console.error("Error fetching devices from basket:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
