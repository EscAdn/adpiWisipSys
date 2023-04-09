import { Router } from "express";
import validateInvoice from "../validators/invoice.validator";
import { getInvoices, getInvoice, addInvoice, updateInvoice, deleteInvoice } from "./../controllers/invoice.controller";

const router = Router();

router.get("/", getInvoices);
router.get("/:id", getInvoice);
router.post("/", validateInvoice, addInvoice);
router.put("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);

export default router;
