import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

const validateCreated = [
  check("name").exists().isString(),
  check("telephone").exists().isMobilePhone(),
  check("address_id").exists().isNumeric(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
