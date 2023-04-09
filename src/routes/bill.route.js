import {Router} from "express";
import {getBills, getBill, addBill, updateBill, deleteBill} from "./../controllers/bill.componets";

const router = Router();

router.get("/", getBills);
router.get("/:id", getBill);
router.post("/", addBill);
router.put("/:id", updateBill);
router.delete("/:id", deleteBill);

export default router;