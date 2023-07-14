import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

const validateCreated = [
  check("name").exists().isString(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
