import { Router } from "express";
import { methods as payment } from "./../controllers/payments.controller";

const router = Router();

// Endpoints
router.get("/", payment.getPaymentsPromises);
router.get("/:id", payment.getPaymentPromise);
router.post("/", payment.addPaymentPromise);
router.put("/:id", payment.updatePaymentPromise);
router.delete("/:id", payment.deletePaymentPromise);

export default router;
