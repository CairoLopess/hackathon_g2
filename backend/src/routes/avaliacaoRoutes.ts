import { Router } from "express";
import avaliacaoController from "../controllers/avaliacaoController";


const router = Router();

router.post("/",avaliacaoController.createAvaliacao);
router.get("/", avaliacaoController.getAllAvaliacoes);
router.get("/:id", avaliacaoController.getAvaliacaoById);
router.put("/:id", avaliacaoController.updateAvaliacao);


export default router;