
-- Criar um banco de dados PostgreSQL chamado hackathon_db.
-- Criar tabelas no banco de dados para armazenar informações de avaliadores, equipes e avaliações.
-- A tabela avaliadores terá um id (chave primária e incremental), nome (string), login (string) e senha (string).
-- A tabela equipes terá um id (chave primária e incremental) e nome (string).
-- A tabela avaliacoes terá um id (chave primária e incremental), avaliador_id (chave estrangeira de avaliadores), equipe_id (chave_estrangeira de equipes) e notas (um json com a nota para cada pergunta - notas JSONB NOT NULL).
-- Todos os campos destas tabelas devem ser não nulos.

-- Criação tabela avaliadores
CREATE TABLE avaliadores (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  login VARCHAR(255) NOT NULL UNIQUE,
  senha VARCHAR(255) NOT NULL,
);

--Criação tabela equipes
CREATE TABLE equipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

-- Criação tabela avaliações
CREATE TABLE avaliacoes (
  id SERIAL PRIMARY KEY,
  avaliador_id VARCHAR(255) NOT NULL,
  equipe_id INT NOT NULL,
  notas JSONB NOT NULL DEFAULT '{
    "Originalidade do Projeto: Qual a inovação e originalidade do projeto apresentado pela equipe?": "",
    "Impacto Potencial: Qual o impacto potencial do projeto na sociedade ou no mercado?" : "",
    "Execução Técnica: Qual a qualidade da execução técnica e da implementação do projeto?": "",
    "Apresentação e Demonstração: Quão clara e eficaz foi a apresentação e demonstração do projeto pela equipe?": "",
    "Viabilidade e Sustentabilidade: Quão viável e sustentável é o projeto a longo prazo?": ""
        }',
  feita BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (equipe_id) REFERENCES equipes (id),
  FOREIGN KEY (avaliador_id) REFERENCES avaliadores (id)
)

-- Add da constrainte unique_avaliador_equipe para que um avaliador nao avalie a mesma equipe duas vezes
ALTER TABLE avaliacoes
ADD CONSTRAINT unique_avaliador_equipe UNIQUE (avaliador_id, equipe_id);

