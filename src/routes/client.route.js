import { Router } from "express";
import { getClient, getClients, addClient, updateClient, deleteClient } from "../controllers/client.controller";
import validateCreated from "../validators/client.validator";
import { validateAccessRol } from "./../midelwares/rol";

const router = Router();

// EndPoinst
router.get("/", getClients);
router.get("/:id", getClient);
router.post("/", validateCreated, addClient);
router.put("/:id", validateCreated, updateClient);
router.delete("/:id", deleteClient);

export default router;
