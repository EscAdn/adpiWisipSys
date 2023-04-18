import moment from "moment/moment";
import { matchedData } from "express-validator";
import { encryp, compare } from "./../helpers/passwordHelper";
import { userServices } from "../services/users.js";

export const addUser = async (req, res) => {
  req = matchedData(req);
  const password = await encryp(req.password);
  req.updated_at = moment().format("YYYY-MM-DD");
  req.created_at = moment().format("YYYY-MM-DD");
  const data = { ...req, password };

  const result = await userServices.addUser(data);
  res.json(result);
};
