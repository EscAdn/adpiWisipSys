import moment from "moment/moment";
import { matchedData } from "express-validator";
import { encryp, compare } from "./../helpers/passwordHelper";
import { userServices } from "../services/users.js";
import { generateJWT } from "./../helpers/jwtHelper";
import { errorMessage } from "./../helpers/errorHelper";

export const addUser = async (req, res) => {
  try {
    req = matchedData(req);
    const existeEmail = await userServices.getUserExist(req.email);

    if (existeEmail.length > 0) {
      throw new Error("EMAIL_EXIST");
    }

    const password = await encryp(req.password);
    req.updated_at = moment().format("YYYY-MM-DD");
    req.created_at = moment().format("YYYY-MM-DD");
    const dataUser = { ...req, password };
    const result = await userServices.addUser(dataUser);

    if (result.err) {
      throw new Error(result.err);
    }
    delete dataUser.password;

    const data = {
      token: await generateJWT(dataUser),
      user: dataUser,
    };
    result.data = data;

    res.json(result);
  } catch (error) {
    errorMessage(res, error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    req = matchedData(req);
    const result = await userServices.getUser(req.email);

    if (result.length === 0) {
      throw new Error("EMAIL_INCORRECT");
    }

    if (result.err) {
      throw new Error(result.err);
    }

    const password = await compare(req.password, result[0].password);
    delete result[0].password;

    if (!password) {
      throw new Error("PASSWORD_INCORRECT");
    }

    const data = {
      token: await generateJWT(result),
      user: result,
    };

    res.json(data);
  } catch (error) {
    errorMessage(res, error.message);
  }
};
