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
      deviceInfo,
      img,
      description,
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
      description,
      img,
      salePercent,
      deliveryHome,
      deliveryPoint,
      soldCount,
    });

    if (deviceInfo) {
      deviceInfo.forEach(async (e) => {
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
  let { brandId, typeId, page, limit, search, minPrice, maxPrice } = req.query;

  page = page ?? 1;
  limit = limit ?? 20;
  let offset = page * limit - limit;
  let whereClause = {};

  const brandIdArray = brandId ? brandId?.split(",").map(Number) : [];
  if (Array.isArray(brandIdArray) && brandIdArray.length > 0) {
    whereClause.brandId = { [Op.or]: brandIdArray };
  } else if (brandId) {
    whereClause.brandId = brandId;
  }

  const typeIdArray = typeId ? typeId?.split(",").map(Number) : [];
  if (Array.isArray(typeIdArray) && typeIdArray.length > 0) {
    whereClause.typeId = { [Op.or]: typeIdArray };
  } else if (typeId) {
    whereClause.typeId = typeId;
  }

  if (search) {
    console.log("-----------------", search);
    let searchConditions = [];

    const foundBrands = await model.Brand.findAll({
      where: { name: { [Op.iLike]: `%${search}%` } },
      attributes: ["id"],
    });
    if (foundBrands.length > 0) {
      const brandIds = foundBrands.map((brand) => brand.id);
      searchConditions.push({ brandId: { [Op.in]: brandIds } });
    }
    const foundTypes = await model.Type.findAll({
      where: { name: { [Op.iLike]: `%${search[0].toUpperCase() + search.substring(1).toLowerCase()}%` } },
      attributes: ["id"],
    });
    if (foundTypes.length > 0) {
      const typeIds = foundTypes.map((type) => type.id);
      searchConditions.push({ typeId: { [Op.in]: typeIds } });
    }

    searchConditions.push({ name: { [Op.iLike]: `%${search}%` } });

    whereClause[Op.or] = searchConditions;
  }

  if (minPrice && maxPrice) {
    whereClause.price = { [Op.between]: [minPrice, maxPrice] };
  } else if (minPrice) {
    whereClause.price = { [Op.gte]: minPrice };
  } else if (maxPrice) {
    whereClause.price = { [Op.lte]: maxPrice };
  }

  const devices = await model.Device.findAndCountAll({
    where: whereClause,
    order: [['id', 'ASC']],
    // limit,
    // offset,
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
