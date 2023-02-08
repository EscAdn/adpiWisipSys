import { Router } from "express";
import { methods as plans } from "./../controllers/plan.controller";

const router = Router();

// EndPoints
router.get("/", plans.getPlans);
router.get("/:id", plans.getPlan);
router.post("/", plans.addPlan);
router.put("/:id", plans.updatePlan);
// router.delete("/:id", plans.deletePlan);

export default router;
