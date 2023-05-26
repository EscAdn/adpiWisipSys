import { Router } from "express";
import {
  getAddresses,
  getAddress,
  addAddress,
  updateAddress,
} from "./../controllers/address.controller";
import validateCreated from "../validators/address.validator";
import { authValidate } from "./../midelwares/autorization";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// Métodos
router.get("/", authValidate, validateAccessRol(["admin"]), getAddresses);
router.get("/:id", authValidate, validateAccessRol(["admin"]) getAddress);
router.post("/", validateCreated, authValidate, validateAccessRol(["admin"]), addAddress);
router.put("/:id", validateCreated, authValidate, validateAccessRol(["admin"]), updateAddress);

export default router;
