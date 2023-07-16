import { Router } from "express";
import { getNodes, getNode, addNode, updateNode } from "../controllers/node.controller";
import validateCreated from "../validators/node.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

//EndPoints
router.get("", getNodes);
router.get("/:id", getNode);
router.post("/", validateCreated, addNode);
router.put("/:id", validateCreated, updateNode);

export default router;
