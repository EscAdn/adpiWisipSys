import { Router } from "express";
import validateInvoice from "../validators/invoice.validator";
import { methods as invoice } from "./../controllers/invoice.controller";

const router = Router();

router.get("/", invoice.getInvoices);
router.get("/:id", invoice.getInvoice);
router.post("/", validateInvoice, invoice.addInvoice);
router.put("/:id", invoice.updateInvoice);
router.delete("/:id", invoice.deleteInvoice);

export default router;
