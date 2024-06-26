import { Router } from "express";
import equipeController from "../controllers/equipeController";


const router = Router();

router.post("/", equipeController.createEquipe);
router.get("/", equipeController.getEquipes);
router.delete("/:id", equipeController.deleEquipe);

export default router;