import { Router } from "express";
import {
  getAddresses,
  getAddress,
  addAddress,
  updateAddress,
} from "./../controllers/address.controller.js";
import validateCreated from "../validators/address.validator.js";
import { authValidate } from "./../midelwares/autorization.js";
import { validateAccessRol } from "./../midelwares/rol.js";

const router = Router();

// Métodos
router.get("/", getAddresses);
router.get("/:id", getAddress);
router.post("/", validateCreated, addAddress);
router.put("/:id", validateCreated, updateAddress);

export default router;
