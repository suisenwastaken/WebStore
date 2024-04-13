import sequelize from "../DB.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Favorite = sequelize.define("favorite", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const OrderDevice = sequelize.define("order_device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  salePercent: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
  deliveryHome: { type: DataTypes.STRING, unique: false, allowNull: false },
  deliveryPoint: { type: DataTypes.STRING, unique: false, allowNull: false },
  soldCount: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  rating: { type: DataTypes.DOUBLE, allowNull: false, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
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
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Favorite);
Favorite.belongsTo(User);

Device.hasMany(Favorite);
Favorite.belongsTo(Device);

User.hasMany(Order);
Order.belongsTo(User);

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
  Favorite,
  Device,
  Type,
  Brand,
  TypeBrand,
  Comment,
  DeviceInfo,
  OrderDevice
};
