import pool from "../database/dbConfig";

interface Avaliador {
  id?: number;
  name: string;
  login: string;
  senha: string;
}

class AvaliadorModel {
  async create(avaliador: Avaliador): Promise<Avaliador> {
    const { name, login, senha } =
      avaliador;
    const result = await pool.query(
      "INSERT INTO avaliadores (name, login, senha) VALUES ($1, $2, $3) RETURNING *",
      [name, login, senha]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Avaliador[] | null> {
    const result = await pool.query("SELECT * FROM avaliadores");
    return result.rows || null;
  }

  async delete(id: number): Promise<void> {
    await pool.query("DELETE FROM avaliadores WHERE id = $1", [id]);
  }
}

export { Avaliador, AvaliadorModel };