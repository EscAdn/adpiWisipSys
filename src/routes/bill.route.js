import {Router} from "express";
import {methods as bills} from "./../controllers/bill.componets";

const router = Router();

router.get("/", bills.getBills);
router.get("/:id", bills.getBill);
router.post("/", bills.addBill);
router.put("/:id", bills.updateBill);
router.delete("/:id", bills.deleteBill);

export default router;