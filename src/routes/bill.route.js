import { Router } from "express";
import {
  getBills,
  getBill,
  addBill,
  updateBill,
  deleteBill,
} from "./../controllers/bill.componets";
import validateCreated from "../validators/bills.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

router.get("/", validateAccessRol(["admin"]), getBills);
router.get("/:id", validateAccessRol(["admin"]),getBill);
router.post("/", validateCreated, validateAccessRol(["admin"]), addBill);
router.put("/:id", validateCreated, validateAccessRol(["admin"]), updateBill);
router.delete("/:id", validateAccessRol(["admin"]), deleteBill);

export default router;
