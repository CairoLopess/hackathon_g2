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

}

export default new AvaliacaoService();