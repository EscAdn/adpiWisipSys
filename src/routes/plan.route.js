import { Router } from "express";
import { getPlans, getPlan, addPlan, updatePlan } from "./../controllers/plan.controller";
import validateCreated from "../validators/plan.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// EndPoints
router.get("/", validateAccessRol(["admin"]), getPlans);
router.get("/:id", validateAccessRol(["admin"]), getPlan);
router.post("/", validateCreated, validateAccessRol(["admin"]), addPlan);
router.put("/:id", validateAccessRol(["admin"]), updatePlan);
// router.delete("/:id", plans.deletePlan);

export default router;
