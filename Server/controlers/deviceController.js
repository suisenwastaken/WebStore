import { v4 } from "uuid";
import path from "path";
import { Op } from "sequelize";
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
  let { brandId, typeId, page, limit, search } = req.query;

  page = page ?? 1;
  limit = limit ?? 20;
  let offset = page * limit - limit;
  let whereClause = {};

  if (Array.isArray(brandId) && brandId.length > 0) {
    whereClause.brandId = { [Op.or]: brandId };
  } else if (brandId) {
    whereClause.brandId = brandId;
  }

  if (Array.isArray(typeId) && typeId.length > 0) {
    whereClause.typeId = { [Op.or]: typeId };
  } else if (typeId) {
    whereClause.typeId = typeId;
  }

  if (search) {
    whereClause[Op.or] = { name: { [Op.iLike]: `%${search}%` } };
  }

  const devices = await model.Device.findAndCountAll({
    where: whereClause,
    limit,
    offset,
  });

  return res.json(devices);
}

export async function getPromo(req, res, next) {
  try {
    const devices = await model.Device.findAll({
      where: {
        salePercent: {
          [Op.gte]: 30,
        },
      },
    });

    return res.json(devices);
  } catch (error) {
    next(ApiError.badRequest(error.message));
  }
}

export async function getById(req, res) {
  const { id } = req.params;
  const device = await model.Device.findOne({
    where: { id },
    include: [
      { model: model.DeviceInfo, as: "info" },
      {
        model: model.Comment,
        include: [{ model: model.User, attributes: ["name"] }],
      },
    ],
  });

  res.json(device);
}
