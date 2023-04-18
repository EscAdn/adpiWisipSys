import { Router } from "express";
import { validateRegister } from "./../validators/users.validators";
import { addUser } from "./../controllers/users.controller";

const route = Router();

route.post("/register", validateRegister, addUser);

export default route;
