import { Router } from "express";
import {
  validateAddInvoice,
  validateState,
} from "../validators/invoice.validator.js";
import {
  getInvoices,
  getInvoice,
  addInvoice,
  updateInvoice,
  deleteInvoice,
} from "./../controllers/invoice.controller.js";
import { validateAccessRol } from "./../midelwares/rol.js";

const router = Router();

router.get("/", getInvoices);
router.get("/:id", getInvoice);
router.post("/", validateAddInvoice, addInvoice);
router.put("/:id", validateState, updateInvoice);
router.delete("/:id", deleteInvoice);

export default router;
