import { Router } from "express";
import { methods as invpice } from "./../controllers/invoice.controller";

const router = Router();

router.get("/", invpice.getInvoices);
router.get("/:id", invpice.getInvoice);
router.post("/", invpice.addInvoice);
router.put("/:id", invpice.updateInvoice);
router.delete("/:id", invpice.deleteInvoice);

export default router;
