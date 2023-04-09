import { Router } from "express";
import { getNodes, getNode, addNode, updateNode } from "../controllers/node.controller";
import { validated } from "../validators/node.validator";

const router = Router();

//EndPoints
router.get("/", getNodes);
router.get("/:id", getNode);
router.post("/", validated.validateCreate, addNode);
router.put("/:id", validated.validateCreate, updateNode);

export default router;
