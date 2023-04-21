import { Router } from "express";
import { getPaymentsPromises, getPaymentPromise, addPaymentPromise, updatePaymentPromise, deletePaymentPromise } from "./../controllers/payments.controller";

const router = Router();

// Endpoints
router.get("/", getPaymentsPromises);
router.get("/:id", getPaymentPromise);
router.post("/", addPaymentPromise);
router.put("/:id", updatePaymentPromise);
router.delete("/:id", deletePaymentPromise);

export default router;
