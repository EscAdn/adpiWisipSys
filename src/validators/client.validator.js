import { check } from "express-validator";
import validateResults from "../helpers/validateHelper";

const validateCreated = [
  check("name").exists().isEmpty().not().isString(),
  check("telephone").exists().isEmpty().not().isMobilePhone(),
  check("address_id").exists().isEmpty().not().isNumeric(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
