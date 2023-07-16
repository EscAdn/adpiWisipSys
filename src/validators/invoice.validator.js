import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

export const validateAddInvoice = [
  check("contract_id").exists().isNumeric(),
  check("from").exists().isString(),
  check("to").exists().isString(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export const validateState = [
  check("state")
    .exists()
    .isString()
    .custom((value, { req }) => {
      if (
        value === "Activa" ||
        value === "Pagada" ||
        value === "Vencida" ||
        value === "Cancelada"
      ) {
        return true;
      }
      throw new Error(
        "El estado debe ser 'Activa', 'Pagada', 'Vencida' o 'Cancelada'"
      );
    }),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];
