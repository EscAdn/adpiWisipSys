import { Router } from "express";
import { methods as node } from "../controllers/node.controller";
import { validated } from "../validators/node.validator";

const router = Router();

//EndPoints
router.get("/", node.getNodes);
router.get("/:id", node.getNode);
router.post("/", validated.validateCreate, node.addNode);
router.put("/:id", validated.validateCreate, node.updateNode);

export default router;
