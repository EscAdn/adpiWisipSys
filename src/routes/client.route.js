import { Router } from "express";
import { methods as clients } from "../controllers/client.controller";
import validateCreated from "../validators/client.validator";

const router = Router();

// EndPoinst
router.get("/", clients.getClients);
router.get("/:id", clients.getClient);
router.post("/", validateCreated, clients.addClient);
router.put("/:id", validateCreated, clients.updateClient);
router.delete("/:id", clients.deleteClient);

export default router;
