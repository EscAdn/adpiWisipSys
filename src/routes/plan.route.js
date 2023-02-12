import { Router } from "express";
import { methods as plans } from "./../controllers/plan.controller";
import validateCreated from "../validators/plan.validator";

const router = Router();

// EndPoints
router.get("/", plans.getPlans);
router.get("/:id", plans.getPlan);
router.post("/", validateCreated, plans.addPlan);
router.put("/:id", plans.updatePlan);
// router.delete("/:id", plans.deletePlan);

export default router;
