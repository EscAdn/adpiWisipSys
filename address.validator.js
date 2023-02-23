import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper";

const validateCreated = [
  check("address").exists().isString(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
