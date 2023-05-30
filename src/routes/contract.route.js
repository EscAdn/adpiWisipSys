import { Router } from "express";
import { getContracts, getContract, addContract, updateContract, deleteContract } from "../controllers/contract.controller";
import validateCreated from "../validators/contract.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// EndPoints
router.get("/", validateAccessRol(["admin"]), getContracts);
router.get("/:id", validateAccessRol(["admin"]), getContract);
router.post("/", validateCreated, validateAccessRol(["admin"]), addContract);
router.put("/:id", validateCreated, validateAccessRol(["admin"]), updateContract);
router.delete("/:id", validateAccessRol(["admin"]), deleteContract);

export default router;
