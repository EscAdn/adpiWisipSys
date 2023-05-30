import { Router } from "express";
import { getClient, getClients, addClient, updateClient, deleteClient } from "../controllers/client.controller";
import validateCreated from "../validators/client.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// EndPoinst
router.get("/", validateAccessRol(["admin"]), getClients);
router.get("/:id", validateAccessRol(["admin"]), getClient);
router.post("/", validateCreated, validateAccessRol(["admin"]), addClient);
router.put("/:id", validateCreated, validateAccessRol(["admin"]), updateClient);
router.delete("/:id", validateAccessRol(["admin"]), deleteClient);

export default router;
