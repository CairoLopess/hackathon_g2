import { Router } from "express";
import avaliadorController from "../controllers/avaliadorController";


const router = Router();

router.post("/",avaliadorController.createAvaliador);
router.get("/", avaliadorController.getAvaliadores);
router.delete("/:id", avaliadorController.deleteAvaliador);
router.put("/:id", avaliadorController.updateAvaliador);
router.get("/:id", avaliadorController.getAvaliadorById);

export default router;