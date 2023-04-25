import { Router } from "express";
import {
  getBills,
  getBill,
  addBill,
  updateBill,
  deleteBill,
} from "./../controllers/bill.componets";
import validateCreated from "../validators/bills.validator";

const router = Router();

router.get("/", getBills);
router.get("/:id", getBill);
router.post("/", validateCreated, addBill);
router.put("/:id", validateCreated, updateBill);
router.delete("/:id", deleteBill);

export default router;
