import pool from "../database/dbConfig";

interface Avaliacao {
  id?: number;
  avaliador_id: number;
  equipes_id: number;
  notas: string;
}

class AvaliacaoModel {
  async create(avaliacao: Avaliacao): Promise<Avaliacao> {
    const { avaliador_id, equipes_id, notas } =
      avaliacao;
    const result = await pool.query(
      "INSERT INTO avaliacoes (avaliador_id, equipes_id, notas) VALUES ($1, $2, $3) RETURNING *",
      [avaliador_id, equipes_id, notas]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Avaliacao[] | null> {
    const result = await pool.query("SELECT * FROM avaliacoes");
    return result.rows || null;
  }

  async delete(id: number): Promise<void> {
    await pool.query("DELETE FROM avaliacoes WHERE id = $1", [id]);
  }
}

export { Avaliacao, AvaliacaoModel };