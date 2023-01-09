import { Router } from "express";
import { methods as clients } from "../controllers/client.controller";

const router = Router();

// EndPoinst
router.get("/", clients.getClients);
router.get("/:id", clients.getClient);
router.post("/", clients.addClient);
router.put("/:id", clients.updateClient);
router.delete("/:id", clients.deleteClient);

export default router;
