import { Router } from "express";
import { methods as address } from "./../controllers/address.controller";

const router = Router();

// Métodos
router.get("/", address.getAddresses);
router.get("/:id", address.getAddress);
router.post("/", address.addAddress);
router.put("/:id", address.updateAddress);
router.delete("/:id", address.deleteAddress);

export default router;
