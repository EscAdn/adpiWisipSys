import { check } from "express-validator";
import validateResults from "../helpers/validateHelper";

export const validateRegister = [
  check("name").exists().notEmpty().isString(),
  check("email").exists().notEmpty().isEmail(),
  check("telephone").exists(),
  check("authorization")
    .exists()
    .isString()
    .custom((value, { req }) => {
      if (value === "admin" || value === "tecnic" || value === "view") {
        return true;
      }
      throw new Error("Authorization no valida");
    }),
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
