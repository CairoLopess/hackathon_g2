import pool from "../database/dbConfig";

interface Avaliacao {
  id?: number;
  avaliador_id: string;
  equipe_id: number;
}

class AvaliacaoModel {
  async create(avaliacao: Avaliacao): Promise<Avaliacao> {
    const { avaliador_id, equipe_id} =
      avaliacao;
    const result = await pool.query(
      "INSERT INTO avaliacoes (avaliador_id, equipe_id) VALUES ($1, $2) RETURNING *",
      [avaliador_id, equipe_id]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Avaliacao[] | null> {
    const result = await pool.query("SELECT * FROM avaliacoes");
    return result.rows || null;
  }

  async update(id: number, avaliacao: Partial<Avaliacao>): Promise<Avaliacao | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let query = "UPDATE avaliacoes SET ";

    Object.keys(avaliacao).forEach((key, index) => {
      fields.push(`${key} = $${index + 1}`);
      values.push((avaliacao as any)[key]);
    });

    query +=
      fields.join(", ") +
      " WHERE id = $" +
      (fields.length + 1) +
      " RETURNING *";
    values.push(id);

    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  async findById(id: number): Promise<Avaliacao | null> {
    const result = await pool.query("SELECT * FROM avaliacoes WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

}

export { Avaliacao, AvaliacaoModel };