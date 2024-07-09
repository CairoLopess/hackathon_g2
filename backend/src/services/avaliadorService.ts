import { Avaliador, AvaliadorModel } from "../models/avaliadorModel";

class AvaliadorService {
  private avaliadorModel: AvaliadorModel;

  constructor() {
    this.avaliadorModel = new AvaliadorModel();
  }

  async createAvaliador(AvaliadorData: Avaliador): Promise<Avaliador> {
    return this.avaliadorModel.create(AvaliadorData);
  }

  async getAllAvaliadores(): Promise<Avaliador[] | null> {
    return this.avaliadorModel.findAll();
  }

  async deleteAvaliador(id: string): Promise<void> {
    return this.avaliadorModel.delete(id);
  }

  async updateAvaliador(
    id: string,
    updateData: Partial<Avaliador>
  ): Promise<Avaliador | null> {
    return this.avaliadorModel.update(id, updateData);
  }

  async getAvaliadorById(id: string): Promise<Avaliador | null> {
    return this.avaliadorModel.findById(id);
  }
}

export default new AvaliadorService();