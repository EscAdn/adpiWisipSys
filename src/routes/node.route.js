import { Router } from "express";
import { getNodes, getNode, addNode, updateNode } from "../controllers/node.controller";
import { validated } from "../validators/node.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

//EndPoints
router.get("", validateAccessRol(["admin"]), getNodes);
router.get("/:id", validateAccessRol(["admin"]), getNode);
router.post("/", validated.validateCreate, validateAccessRol(["admin"]), addNode);
router.put("/:id", validated.validateCreate, validateAccessRol(["admin"]), updateNode);

export default router;
