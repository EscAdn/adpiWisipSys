import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

const validateCreate = [
  check("contract_id").exists().isNumeric(),
  check("from").exists().isEmpty().isString(),
  check("to").exists().isEmpty().isString(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreate;
