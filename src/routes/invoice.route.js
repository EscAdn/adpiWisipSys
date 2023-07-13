import { Router } from "express";
import {
  validateAddInvoice,
  validateState,
} from "../validators/invoice.validator";
import {
  getInvoices,
  getInvoice,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} from "./../controllers/invoice.controller";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

router.get("/", getInvoices);
router.get("/:id", getInvoice);
router.post("/", validateAddInvoice, addInvoice);
router.put("/:id", validateState, updateInvoice);
router.delete("/:id", deleteInvoice);

export default router;
