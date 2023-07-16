import { Router } from "express";
import {
  getPlans,
  getPlan,
  addPlan,
  updatePlan,
} from "./../controllers/plan.controller.js";
import validateCreated from "../validators/plan.validator.js";
import { validateAccessRol } from "./../midelwares/rol.js";

const router = Router();

// EndPoints
router.get("/", getPlans);
router.get("/:id", getPlan);
router.post("/", validateCreated, addPlan);
router.put("/:id", updatePlan);
// router.delete("/:id", plans.deletePlan);

export default router;
