import { check, validationResult } from "express-validator";

const validateCreated = [
  check("address").exists().isString(),
  (req, res, next) => {
    validationResult(req, res, next);
  },
];

export default validateCreated;
