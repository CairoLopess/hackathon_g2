import { Request, Response } from "express";
import equipeService from "../services/equipeService";

class EquipeController {
  async createEquipe(req: Request, res: Response): Promise<Response> {
    try {
      const equipe = await equipeService.createEquipe(req.body);
      return res.status(201).json(equipe);
    } catch (error) {
      return res.status(500).json({ error: "Error creating team" });
    }
  }

  async getEquipes(req: Request, res: Response): Promise<Response> {
    try {
      const equipes = await equipeService.getAllEquipes();
      if (equipes) {
        return res.status(200).json(equipes);
      }
      return res.status(404).json({ error: "teams not found" });
    } catch (error) {
      return res.status(500).json({ error: "Error fetching teams" });
    }
  }

  async deleEquipe (req: Request, res: Response): Promise<Response> {
    try {
      await equipeService.deleteEquipe(Number(req.params.id));
      return res.status(200).json({ message: "team deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Error deleting team" });
    }
  }
}

export default new EquipeController();