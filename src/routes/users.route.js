import { Router } from "express";
import {
  validateRegister,
  validateLogin,
} from "./../validators/users.validators";
import { addUser, loginUser } from "./../controllers/users.controller";

const route = Router();

route.post("/register", validateRegister, addUser);
route.post("/login", validateLogin, loginUser);

export default route;
