import { check } from "express-validator";
import validateResults from "../helpers/validateHelper";

export const validateRegister = [
  check("name").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isEmail(),
  check("telephone").exists(),
  check("roles").exists(),
  check("password").exists().notEmpty().isLength({ min: 5, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export const validateLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 5, max: 15 }),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];
