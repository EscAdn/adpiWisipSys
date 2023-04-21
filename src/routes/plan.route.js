import { Router } from "express";
import { getPlans, getPlan, addPlan, updatePlan } from "./../controllers/plan.controller";
import validateCreated from "../validators/plan.validator";

const router = Router();

// EndPoints
router.get("/", getPlans);
router.get("/:id", getPlan);
router.post("/", validateCreated, addPlan);
router.put("/:id", updatePlan);
// router.delete("/:id", plans.deletePlan);

export default router;
