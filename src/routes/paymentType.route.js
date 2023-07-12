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
router.get("/", getPaymentsTypes);
router.get("/:id", getPaymentType);
router.post("/", validateCreated, addPaymentType);
router.put("/:id", validateCreated, updategetPaymentType);

export default router;
