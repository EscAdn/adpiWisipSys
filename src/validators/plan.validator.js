import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

const validateCreated = [
  check("name").exists().isString().trim(),
  check("ceil_down_mbps").exists().isNumeric(),
  check("ceil_up_mbps").exists().isNumeric(),
  check("price").exists().isFloat(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
