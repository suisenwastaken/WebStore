import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  const { deviceId } = req.body
  const userId = req.user.id;

  let candidate = await model.FavoriteDevices.findOne({
    where: { deviceId, userId },
  });

  if (candidate) {
    await model.FavoriteDevices.destroy({ where: { deviceId, userId } });
    return res.json({ message: "Устройство удалено из избранных" });
  } else {
    await model.FavoriteDevices.create({ deviceId, userId });
    return res.json({ message: "Устройство добавлено в избранные" });
  }
}

export async function get(req, res) {
  try {
    const userId = req.user.id;
    const favoriteDevices = await model.FavoriteDevices.findAll({
      where: { userId },
      include: [{ model: model.Device }],
    });

    const devices = favoriteDevices.map(
      (favoriteDevice) => favoriteDevice.device
    );

    return res.json(devices);
  } catch (error) {
    console.error("Ошибка получения устройства", error);
    return res.status(500).json({ error: "Ошибка ответа сервера" });
  }
}
