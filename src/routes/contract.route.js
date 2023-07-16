import { Router } from "express";
import { getContracts, getContract, addContract, updateContract, deleteContract } from "../controllers/contract.controller";
import validateCreated from "../validators/contract.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// EndPoints
router.get("/", getContracts);
router.get("/:id", getContract);
router.post("/", validateCreated, addContract);
router.put("/:id", validateCreated, updateContract);
router.delete("/:id", deleteContract);

export default router;
