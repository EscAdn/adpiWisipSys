import { Router } from "express";
import { methods as node } from "../controllers/node.controller";

const router = Router();

//EndPoints
router.get("/", node.getNodes);
router.get("/:id", node.getNode);
router.post("/", node.addNode);
router.put("/:id", node.updateNode);
router.delete("/:id", node.deleteNode);

export default router;
