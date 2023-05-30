import { Router } from "express";
import validateInvoice from "../validators/invoice.validator";
import { validateAccessRol } from "./../midelwares/rol";
import { getInvoices, getInvoice, addInvoice, updateInvoice, deleteInvoice } from "./../controllers/invoice.controller";

const router = Router();

router.get("/", validateAccessRol(["admin"]), getInvoices);
router.get("/:id", validateAccessRol(["admin"]), getInvoice);
router.post("/", validateInvoice, validateAccessRol(["admin"]), addInvoice);
router.put("/:id", validateAccessRol(["admin"]), updateInvoice);
router.delete("/:id", validateAccessRol(["admin"]), deleteInvoice);

export default router;
