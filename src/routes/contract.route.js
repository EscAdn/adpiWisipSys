import { Router } from "express";
import { methods as contracts } from "../controllers/contract.controller";

const router = Router();

// EndPoints
router.get("/", contracts.getContracts);
router.get("/:id", contracts.getContract);
router.post("/", contracts.addContract);
router.put("/:id", contracts.updateContract);
router.delete("/:id", contracts.deleteContract);

export default router;
