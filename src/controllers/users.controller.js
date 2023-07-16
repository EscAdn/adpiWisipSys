import moment from "moment";
import { matchedData } from "express-validator";
import { encryp, compare } from "./../helpers/passwordHelper.js";
import { userServices } from "../services/users.js";
import { generateJWT } from "./../helpers/jwtHelper.js";
import { errorMessage } from "./../helpers/errorHelper.js";

export const addUser = async (req, res) => {
  try {
    req = matchedData(req);
    // Verificar que el correo no est registrado
    const existeEmail = await userServices.getUserExist(req.email);

    if (existeEmail.length > 0) {
      errorMessage(res, "EMAIL_EXIST");
      return;
    }

    // if (!req.authorization) {
    //   delete req.authorization;
    // }

    const password = await encryp(req.password);
    req.created_at = moment().format("YYYY-MM-DD");
    req.updated_at = moment().format("YYYY-MM-DD");
    const user = { ...req, password };
    const result = await userServices.addUser(user);

    if (result.err) {
      errorMessage(res, result.err);
      return;
    }
    
    delete user.password;
    user.id = result.insertId;
    
    const data = {
      token: await generateJWT(user),
      user,
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
      errorMessage(res, "EMAIL_INCORRECT");
      return;
    }

    if (result.err) {
      errorMessage(res, result.err);
      return;
    }
    // console.log(result)
    const password = await compare(req.password, result[0].password);

    if (!password) {
      errorMessage(res, "PASSWORD_INCORRECT");
      return;
    }
    delete result[0].password;
    delete result[0].telephone;

    const data = {
      token: await generateJWT(result),
      user: result[0],
    };

    res.json(data);
  } catch (error) {
    errorMessage(res, error.message);
  }
};


export const getUsers = async (req, res) => {
  try {
    res.json( await userServices.getUsers())
  } catch(e) {
    errorMessage(res, e.message)
  }
}

export const getUser = async (req, res) => {
  try {
    const {id} = req.params
    const result = await userServices.getUser(id);
    res.json(result)
  } catch(e) {
    errorMessage(res, e.message)
  }
}

export const updatedUser = async (req, res) => {
  try {
    const {id} = req.params
    req = matchedData(req)
    const result = await userServices.updatedUser(id, req)
    res.json(result)
  } catch(e) {
    errorMessage(res, e.message)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const {id} = req.params
    const result = await userServices.deleteUser(id)
    res.json(result)
  } catch(e) {
    errorMessage(res, e.message)
  }
}
