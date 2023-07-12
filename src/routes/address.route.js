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
router.get("/", getAddresses);
router.get("/:id", getAddress);
router.post(
  "/",
  validateCreated, 
  addAddress
);
router.put(
  "/:id",
  validateCreated,
  updateAddress
);

export default router;
