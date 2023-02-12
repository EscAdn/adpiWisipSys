import { check } from "express-validator";
import validateResults from "../helpers/validateHelper";

const validateAddInvoice = [
  check("contract_id").exists().isNumeric(),
  check("from").exists().isString(),
  check("die_date").exists().isNumeric(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateAddInvoice;
