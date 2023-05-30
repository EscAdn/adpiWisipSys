import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper";

const validateCreated = [
  check("concept").exists().isString(),
  check("payment_type_id").exists().isNumeric(),
  check("client_name").exists().isString(),
  check("amount_incomes").exists().isDecimal(),
  check("amount_discharge").exists().isDecimal(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
