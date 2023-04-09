import {Router} from "express";
import { getPaymentsTypes, getPaymentType, addPaymentType, updategetPaymentType } from "./../controllers/paymentsTypes.controller";

const router = Router();

// Endpoints
router.get("/", getPaymentsTypes);
router.get("/:id", getPaymentType);
router.post("/", addPaymentType);
router.put("/:id", updategetPaymentType);

export default router;


