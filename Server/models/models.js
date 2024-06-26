import sequelize from "../DB.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "ADMIN" },
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalPrice: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  orderStatus: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  homeDeliveryAddress: { type: DataTypes.STRING },
  deliveryDate: { type: DataTypes.DATE, allowNull: false},
});

const DeliveryPoint = sequelize.define("delivery_point", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: true },
});

const FavoriteDevices = sequelize.define("favorite", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevices = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
});

const OrderDevice = sequelize.define("order_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
});

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false, allowNull: false },
  description: { type: DataTypes.TEXT, unique: false, allowNull: false  },
  price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  salePercent: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  deliveryHome: { type: DataTypes.DATE, unique: false, allowNull: false },
  deliveryPoint: { type: DataTypes.DATE, unique: false, allowNull: false },
  soldCount: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  rating: { type: DataTypes.DOUBLE, allowNull: false, defaultValue: 0 },
  img: { type: DataTypes.TEXT, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Comment = sequelize.define("comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const DeviceInfo = sequelize.define("device_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
});

User.hasMany(FavoriteDevices);
FavoriteDevices.belongsTo(User);

Device.hasMany(FavoriteDevices);
FavoriteDevices.belongsTo(Device);

User.hasMany(Order);
Order.belongsTo(User);

DeliveryPoint.hasMany(Order);
Order.belongsTo(DeliveryPoint)

User.hasMany(BasketDevices);
BasketDevices.belongsTo(User);

Device.hasMany(BasketDevices);
BasketDevices.belongsTo(Device);

Device.hasMany(Comment);
Comment.belongsTo(Device);

User.hasMany(Comment);
Comment.belongsTo(User);

Type.hasMany(Device);
Device.belongsTo(Type);
Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(DeviceInfo, { as: "info" });
DeviceInfo.belongsTo(Device);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

Order.belongsToMany(Device, { through: OrderDevice });
Device.belongsToMany(Order, { through: OrderDevice });

export default {
  User,
  Order,
  FavoriteDevices,
  BasketDevices,
  Device,
  Type,
  Brand,
  TypeBrand,
  Comment,
  DeviceInfo,
  OrderDevice,
  DeliveryPoint,
};
