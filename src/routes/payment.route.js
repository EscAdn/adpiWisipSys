import { Router } from "express";
import { getPayments, getPayment, addPayment, updatePayment, deletePayment } from './../controllers/payments.controller'
import {validateCreated, validateUpdate} from './../validators/payments.validators'
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// Endpoinst
router.get("/", getPayments);
router.get("/:id", getPayment);
router.post("/", validateCreated, addPayment);
router.put("/:id", validateUpdate, updatePayment);
router.delete("/:id", deletePayment);

export default router;
