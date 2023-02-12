import { Router } from "express";
import { methods as contracts } from "../controllers/contract.controller";
import validateCreated from "../validators/contract.validator";

const router = Router();

// EndPoints
router.get("/", contracts.getContracts);
router.get("/:id", contracts.getContract);
router.post("/", validateCreated, contracts.addContract);
router.put("/:id", validateCreated, contracts.updateContract);
router.delete("/:id", contracts.deleteContract);

export default router;
