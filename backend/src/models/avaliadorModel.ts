import pool from "../database/dbConfig";

interface Avaliador {
  id?: number;
  name: string;
  login: string;
  senha: string;
}

class AvaliadorModel {
  async create(avaliador: Avaliador): Promise<Avaliador> {
    const { id, name, login, senha } =
      avaliador;
    const result = await pool.query(
      "INSERT INTO avaliadores (id, name, login, senha) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, name, login, senha]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Avaliador[] | null> {
    const result = await pool.query("SELECT * FROM avaliadores");
    return result.rows || null;
  }

  async delete(id: string): Promise<void> {
    await pool.query("DELETE FROM avaliadores WHERE id = $1", [id]);
  }

  async update(id: string, avaliador: Partial<Avaliador>): Promise<Avaliador | null> {
    const fields: string[] = [];
    const values: any[] = [];
    let query = "UPDATE avaliadores SET ";

    Object.keys(avaliador).forEach((key, index) => {
      fields.push(`${key} = $${index + 1}`);
      values.push((avaliador as any)[key]);
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

  async findById(id: string): Promise<Avaliador | null> {
    const result = await pool.query("SELECT * FROM avaliadores WHERE id = $1", [id]);
    return result.rows[0] || null;
  }
}

export { Avaliador, AvaliadorModel };