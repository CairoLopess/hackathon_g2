import { Router } from "express";
import avaliacaoController from "../controllers/avaliacaoController";


const router = Router();

router.post("/",avaliacaoController.createAvaliacao);
router.get("/", avaliacaoController.getAllAvaliacoes);


export default router;