import { Avaliacao, AvaliacaoModel } from "../models/avaliacaoModel";

class AvaliacaoService {
  private avaliacaoModel: AvaliacaoModel;

  constructor() {
    this.avaliacaoModel = new AvaliacaoModel();
  }

  async createAvaliacao(AvaliacaoData: Avaliacao): Promise<Avaliacao> {
    return this.avaliacaoModel.create(AvaliacaoData);
  }

  async getAllAvaliacoes(): Promise<Avaliacao[] | null> {
    return this.avaliacaoModel.findAll();
  }

  async updateAvaliacao(
    id: number,
    updateData: Partial<Avaliacao>
  ): Promise<Avaliacao | null> {
    return this.avaliacaoModel.update(id, updateData);
  }
}

export default new AvaliacaoService();