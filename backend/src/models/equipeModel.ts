import pool from "../database/dbConfig";

interface Equipe {
  id?: number;
  name: string;
}

class EquipeModel {
  async create(equipe: Equipe): Promise<Equipe> {
    const { name } =
      equipe;
    const result = await pool.query(
      "INSERT INTO equipes (name) VALUES ($1) RETURNING *",
      [name]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Equipe[] | null> {
    const result = await pool.query("SELECT * FROM equipes");
    return result.rows || null;
  }

  async delete(id: number): Promise<void> {
    await pool.query("DELETE FROM equipes WHERE id = $1", [id]);
  }
}

export { Equipe, EquipeModel };