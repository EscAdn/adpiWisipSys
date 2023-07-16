import { Router } from "express";
import { validateAddInvoice, validateState } from "../validators/invoice.validator";
import { validateAccessRol } from "./../midelwares/rol";
import { getInvoices, getInvoice, addInvoice, updateInvoice, deleteInvoice } from "./../controllers/invoice.controller";

const router = Router();

router.get("/", getInvoices);
router.get("/:id", getInvoice);
router.post("/", validateAddInvoice, addInvoice);
router.put("/:id", validateState, updateInvoice);
router.delete("/:id", deleteInvoice);

export default router;
