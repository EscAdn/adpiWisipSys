import { check } from "express-validator";
import validateResults from "./../helpers/validateHelper.js";

const validateCreated = [
  check("client_id").exists().isNumeric(),
  check("plan_id").exists().isNumeric(),
  check("day_cut").exists().isNumeric(),
  check("server_id").exists().isNumeric(),
  check("state").exists().isString(),
  check("ip").exists().isIP(),
  check("netmask").exists().isIP(),
  check("mac_address").exists().isMACAddress(),
  check("details").exists().isString(),
  check("node_id").isNumeric(),
  (req, res, next) => {
    validateResults(req, res, next);
  },
];

export default validateCreated;
