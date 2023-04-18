import moment from "moment/moment";
import { matchedData } from "express-validator";
import { encryp, compare } from "./../helpers/passwordHelper";
import { userServices } from "../services/users.js";
import { generateJWT } from "./../helpers/jwtHelper";

export const addUser = async (req, res) => {
  req = matchedData(req);
  const password = await encryp(req.password);
  req.updated_at = moment().format("YYYY-MM-DD");
  req.created_at = moment().format("YYYY-MM-DD");
  const dataUser = { ...req, password };
  const result = await userServices.addUser(dataUser);

  // Falta comporbar que se registro el usuario en la BD

  const data = {
    token: await generateJWT(dataUser),
    user: dataUser,
  };

  res.json(data);
};

export const loginUser = async (req, res) => {
  try {
    req = matchedData(req);
    const result = await userServices.getUser(req.email, req.password);
    // Validar si existe
    res.json(result);
  } catch (error) {}
};
