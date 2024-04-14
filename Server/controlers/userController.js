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
  const { email, password, role } = req.body;
  if (!email || !password) {
    return next(ApiError.badRequest("Некоректная почта или пароль"));
  }

  const check = await model.User.findOne({ where: { email } });
  if (check) {
    return next(ApiError.badRequest("Такая почта уже зарегестрированна!"));
  }

  const hashPassword = await bcrypt.hash(password, 5);

  const user = await model.User.create({ email, password: hashPassword, role });

  const token = generateJwt(user.id, user.email, user.role);

  return res.json({ token });
}

export async function login(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(ApiError.badRequest("Некоректная почта или пароль"));
  }

  const user = await model.User.findOne({ where: { email } });
  if (!user) {
    return next(ApiError.badRequest("Пользователь не найден!"));
  }

  let comparePassword = bcrypt.compareSync(password, user.password);
  if (!comparePassword) {
    return next(ApiError.badRequest("Неправильный пароль!"));
  }

  const token = generateJwt(user.id, user.email, user.role);
  return res.json({ token });
}

export async function check(req, res, next) {
  const token = generateJwt(req.user.id, req.user.email, req.user.role);
  return res.json({ token });
}
