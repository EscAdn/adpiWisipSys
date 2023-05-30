import { Router } from "express";
import {
  getPaymentsTypes,
  getPaymentType,
  addPaymentType,
  updategetPaymentType,
} from "./../controllers/paymentsTypes.controller";
import validateCreated from "../validators/paymentsTypes.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// Endpoints
router.get("/", validateAccessRol(["admin"]), getPaymentsTypes);
router.get("/:id", validateAccessRol(["admin"]), getPaymentType);
router.post("/", validateCreated, validateAccessRol(["admin"]), addPaymentType);
router.put("/:id", validateCreated, validateAccessRol(["admin"]), updategetPaymentType);

export default router;
