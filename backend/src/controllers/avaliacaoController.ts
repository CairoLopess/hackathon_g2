import { Request, Response } from "express";
import avaliacaoService from "../services/avaliacaoService";

class AvaliacaoController {
  async createAvaliacao(req: Request, res: Response): Promise<Response> {
    try {
      const avaliacao = await avaliacaoService.createAvaliacao(req.body);
      return res.status(201).json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: "Error creating assessment" });
    }
  }

  async getAllAvaliacoes(req: Request, res: Response): Promise<Response> {
    try {
      const avaliacoes = await avaliacaoService.getAllAvaliacoes();
      if (avaliacoes) {
        return res.status(200).json(avaliacoes);
      }
      return res.status(404).json({ error: "assessments not found" });
    } catch (error) {
      return res.status(500).json({ error: "Error fetching assessments" });
    }
  }

}

export default new AvaliacaoController();