import { check } from "express-validator";
import validateResults from "../helpers/validateHelper";

const validateCreated = [
  check("client_id").exists().isEmpty().not().isNumeric(),
  check("plan_id").exists().isEmpty().not().isNumeric(),
  check("day_cut").exists().isEmpty().not().isNumeric(),
  check("server_id").exists().isEmpty().not().isNumeric(),
  check("state").exists().isEmpty().not().isString(),
  check("ip").exists().isEmpty().not().isIP(),
  check("netmask").exists().isEmpty().not().isIP(),
  check("mac_address").exists().isEmpty().not().isMACAddress(),
  check("details").exists().isEmpty().not().isString(),
  check("node_id").exists().isEmpty().not().isNumeric(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
