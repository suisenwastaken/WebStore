import { v4 } from "uuid";
import path from "path";
import model from "../models/models.js";
import ApiError from "../error/apiError.js";
import { where } from "sequelize";

export async function post(req, res, next) {
  try {
    const {
      name,
      price,
      brandId,
      typeId,
      info,
      img,
      salePercent,
      deliveryHome,
      deliveryPoint,
      soldCount,
    } = req.body;

    const device = await model.Device.create({
      name,
      price,
      brandId,
      typeId,
      info,
      img,
      salePercent,
      deliveryHome,
      deliveryPoint,
      soldCount,
    });

    if (info) {
      const infoData = JSON.parse(info);
      infoData.forEach(async (e) => {
        await model.DeviceInfo.create({
          title: e.title,
          description: e.description,
          deviceId: device.id,
        });
      });
    }

    return res.json(device);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}

export async function get(req, res) {
  let { brandId, typeId, page, limit } = req.query;

  page = page ?? 1;
  limit = limit ?? 10;
  let offset = page * limit - limit;
  let devices;

  if (!brandId && !typeId) {
    devices = await model.Device.findAndCountAll({
      include: { model: model.Brand, as: "brand" },
    });
  }

  if (!brandId && typeId) {
    devices = await model.Device.findAndCountAll({
      where: { typeId, limit, offset },
    });
  }

  if (brandId && !typeId) {
    devices = await model.Device.findAndCountAll({
      where: { brandId, limit, offset },
    });
  }

  if (brandId && typeId) {
    devices = await model.Device.findAndCountAll({
      where: { brandId, typeId, limit, offset },
    });
  }

  return res.json(devices);
}

export async function getById(req, res) {
  const { id } = req.params;
  const device = await model.Device.findOne({
    where: { id },
    include: [{ model: model.DeviceInfo}],
    where: { id },
    include: [{ model: model.Comment}],
  });

  return res.json(device);
}
