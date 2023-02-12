import validateResults from "../helpers/validateHelper";

const { check } = require("express-validator");

const validateCreated = [
  check("name").exists().not().isEmpty().isString().trim(),
  check("ceil_down_mbps").exists().not().isEmpty().isNumeric(),
  check("ceil_up_mbps").exists().not().isEmpty().isNumeric(),
  check("price").exists().not().isEmpty().isFloat(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
