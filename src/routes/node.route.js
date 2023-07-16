import { Router } from "express";
import {
  getNodes,
  getNode,
  addNode,
  updateNode,
} from "../controllers/node.controller.js";
import validateCreated from "../validators/node.validator.js";
import { validateAccessRol } from "./../midelwares/rol.js";

const router = Router();

//EndPoints
router.get("", getNodes);
router.get("/:id", getNode);
router.post("/", validateCreated, addNode);
router.put("/:id", validateCreated, updateNode);

export default router;
