import model from "../models/models.js";
import ApiError from "../error/apiError.js";

export async function post(req, res) {
  const { id: deviceId } = req.params;
  const userId = req.user.id;

  let candidate = await model.Favorite.findOne({ where: { deviceId, userId } });

  if (candidate) {
    await model.Favorite.destroy({ where: { deviceId, userId } });
    return res.json({ message: "Device removed from favorites" });
  } else {
    await model.Favorite.create({ deviceId, userId });
    return res.json({ message: "Device added to favorites" });
  }
}

export async function get(req, res) {
    const userId = req.user.id;
    const allFavorites = await model.Favorite.findAll({ 
      where: { userId },
      include: [{ model: model.Device }]
    });
    return res.json(allFavorites);
  }
  