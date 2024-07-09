import { Request, Response } from "express";
import avaliadorService from "../services/avaliadorService";

class AvaliadorController {
  async createAvaliador(req: Request, res: Response): Promise<Response> {
    try {
      const avaliador = await avaliadorService.createAvaliador(req.body);
      return res.status(201).json(avaliador);
    } catch (error) {
      return res.status(500).json({ error: "Error creating evaluator" });
    }
  }

  async getAvaliadores(req: Request, res: Response): Promise<Response> {
    try {
      const avaliadores = await avaliadorService.getAllAvaliadores();
      if (avaliadores) {
        return res.status(200).json(avaliadores);
      }
      return res.status(404).json({ error: "evaluators not found" });
    } catch (error) {
      return res.status(500).json({ error: "Error fetching evaluators" });
    }
  }

  async deleteAvaliador(req: Request, res: Response): Promise<Response> {
    try {
      await avaliadorService.deleteAvaliador(String(req.params.id));
      return res.status(200).json({ message: "evaluator deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error deleting evaluator" });
    }
  }

  async updateAvaliador(req: Request, res: Response): Promise<Response> {
    try {
      const avaliador = await avaliadorService.updateAvaliador(
        String(req.params.id),
        req.body
      );
      if (avaliador) {
        return res.status(200).json(avaliador);
      }
      return res.status(404).json({ error: "evaluator not found" });
    } catch (error) {
      return res.status(500).json({ error: "Error updating evaluator" });
    }
  }

  async getAvaliadorById(req: Request, res: Response): Promise<Response> {
    try {
      const avaliador = await avaliadorService.getAvaliadorById(
        String(req.params.id)
      );
      if (avaliador) {
        return res.status(200).json(avaliador);
      }
      return res.status(404).json({ error: "evaluator not found" });
    } catch (error) {
      return res.status(500).json({ error: "Error fetching evaluator" });
    }
  }
}

export default new AvaliadorController();