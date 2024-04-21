import ApiError from "../error/apiError.js";
import model from "../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function generateJwt(id, email, role) {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
}

export async function registration(req, res, next) {
  const { email, password, name, role } = req.body;
  if (!email || !password) {
    return next(ApiError.badRequest("Некорректная почта или пароль"));
  }

  const check = await model.User.findOne({ where: { email } });
  if (check) {
    return next(ApiError.badRequest("Такая почта уже зарегистрирована!"));
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const user = await model.User.create({
    email,
    password: hashPassword,
    name,
    role,
  });

  const token = generateJwt(user.id, user.email, user.role);

  return res.json({ user, token, message: "Вы зарегистрировались" });
}

export async function login(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(ApiError.badRequest("Некорректная почта или пароль"));
  }

  const user = await model.User.findOne({ where: { email } });
  if (!user) {
    return next(ApiError.badRequest("Пользователь не найден!"));
  }

  let comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return next(ApiError.badRequest("Неправильный пароль!"));
  }

  const basketDevicesResult = await model.BasketDevices.findAll({
    where: { userId: user.id },
    include: [{ model: model.Device }],
  });

  const basketDevices = basketDevicesResult.map((basketDevice) => {
    const { device, count } = basketDevice;
    return { ...device.toJSON(), count };
  });

  const favoriteDevicesResult = await model.FavoriteDevices.findAll({
    where: { userId: user.id },
    include: [{ model: model.Device }],
  });

  const favoriteDevices = favoriteDevicesResult.map(
    (favoriteDevice) => favoriteDevice.device
  );

  const userFields = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  const userInfo = {
    user: userFields,
    basketDevices,
    favoriteDevices,
  };

  const token = generateJwt(user.id, user.email, user.role);
  return res.json({ userInfo, token, message: "Вы вошли в систему" });
}

export async function check(req, res, next) {
  const token = generateJwt(req.user.id, req.user.email, req.user.role);
  return res.json({ token });
}

export async function getUserInfo(req, res) {
  try {
    const userId = req.user.id;

    const user = await model.User.findByPk(userId, {
      attributes: ["id", "name", "email"],
    });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден!" });
    }

    const basketDevicesResult = await model.BasketDevices.findAll({
      where: { userId },
      include: [{ model: model.Device }],
    });

    const basketDevices = basketDevicesResult.map((basketDevice) => {
      const { device, count } = basketDevice;
      console.log(device, count);
      return { ...device.toJSON(), count };
    });

    const favoriteDevicesResult = await model.FavoriteDevices.findAll({
      where: { userId },
      include: [{ model: model.Device }],
    });

    const favoriteDevices = [];
    for (const favoriteDevice of favoriteDevicesResult) {
      favoriteDevices.push(favoriteDevice.device);
    }

    const userInfo = {
      user,
      basketDevices,
      favoriteDevices,
    };

    const newToken = generateJwt(user.id, user.email, user.role);

    return res.json({ userInfo, token: newToken });
  } catch (error) {
    console.error("Error fetching user info:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
