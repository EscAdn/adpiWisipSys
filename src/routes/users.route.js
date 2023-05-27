import { Router } from "express";
import {
  validateRegister,
  validateLogin,
} from "./../validators/users.validators";
import { addUser, loginUser, getUsers } from "./../controllers/users.controller";

const route = Router();

route.get("/", getUsers);
route.post("/register", validateRegister, addUser);
route.post("/login", validateLogin, loginUser);

export default route;
