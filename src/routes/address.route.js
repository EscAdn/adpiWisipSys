import { Router } from "express";
import { methods as address } from "./../controllers/address.controller";
import validateCreated from "../validators/address.validator";

const router = Router();

// Métodos
router.get("/", address.getAddresses);
router.get("/:id", address.getAddress);
router.post("/", validateCreated, address.addAddress);
router.put("/:id", validateCreated, address.updateAddress);

export default router;
