import { Router } from "express";
import {
  validateRegister,
  validateLogin,
} from "./../validators/users.validators";
import { addUser, loginUser } from "./../controllers/users.controller";

const route = Router();

route.post("/register", validateRegister, addUser);
route.post("/login", validateLogin, loginUser);

// route.get("/", getUsers);
// route.get("/:id", getUser)
// route.pat("/:id", updatedUser)
// route.delete("/:id", deleteUser)

export default route;
