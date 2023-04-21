import {Router} from "express";
import { methods as paymentType } from "./../controllers/paymentsTypes.controller";

const router = Router();

// Endpoints
router.get("/", paymentType.getPaymentsTypes);
router.get("/:id", paymentType.getPaymentType);
router.post("/", paymentType.addPaymentType);
router.put("/:id", paymentType.updategetPaymentType);

export default router;


