import { check } from "express-validator";
import validateResults from "../helpers/validateHelper";

const validateCreate = [
  check("address_id").exists().isNumeric(),
  check("details").exists().not().isEmpty(),
  check("ports")
    .exists()
    .isNumeric()
    .custom((value, { req }) => {
      if (value === 8 || value === 16) {
        return true;
      }
      throw new Error("El número de puertos no es valido");
    }),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export const validated = {
  validateCreate,
};
