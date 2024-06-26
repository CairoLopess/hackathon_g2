import { Router } from "express";
import avaliadorController from "../controllers/avaliadorController";


const router = Router();

router.post("/",avaliadorController.createAvaliador);
router.get("/", avaliadorController.getAvaliadores);
router.delete("/:id", avaliadorController.deleteAvaliador);

export default router;