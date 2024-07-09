"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IAvaliador } from "../../interfaces/IAvaliador";
import { IEquipe } from "@/interfaces/IEquipe";
import api from "../../services/api";
import { IAvaliacaoFormData } from "@/interfaces/IAvaliacao";

async function fetchEquipes(): Promise<IEquipe[]> {
    const result = await api.get("/equipes");
    return result.data;
  }

async function fetchAvaliadores(): Promise<IAvaliador[]> {
    const result = await api.get("/avaliadores");
    return result.data;
  }

export default function Home() {
  const router = useRouter();
  const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
  const [equipes, setEquipes] = useState<IEquipe[]>([]);

  const [newAvaliacao, setNewAvaliacao] = useState<IAvaliacaoFormData>({
    avaliador_id: "",
    equipe_id: 0,
  });

  useEffect(() => {
    const getDados = async () => {
      const avaliadoresData = await fetchAvaliadores();
      setAvaliadores(avaliadoresData);

      const equipesData = await fetchEquipes();
      setEquipes(equipesData);

    };
    getDados();
  }, []);

  const makePostRequest = async () => {
    try {
      const response = await api.post("/avaliacoes", {
        ...newAvaliacao,
      });

      console.log("Dados enviados com sucesso!");
      console.log("Resposta:", response.data);
      router.push("/");

    } catch (error) {
      console.error("Erro:", error);
      alert('Erro ao cadastrar avaliacao');
    }
  };

  console.log(newAvaliacao);
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <section className="bg-gray-700  p-8 rounded-lg shadow-lg text-white">
        <h1 className="text-3xl text-green-500 font-bold mb-4">Cadastrar Avaliaçao</h1>
        <div>
            <label htmlFor="avaliador_id" className="block text-sm font-medium text-white">Avaliador</label>
            <select
              id="avaliador_id"
              name="avaliador_id"
              value={newAvaliacao.avaliador_id}
              onChange={(e) => setNewAvaliacao({...newAvaliacao, avaliador_id: e.target.value})}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Selecione um avaliador</option>
              {avaliadores.map((avaliador) => (
                <option key={avaliador.id} value={avaliador.id}>
                  {avaliador.name}
                </option>
              ))}
            </select>
        </div>
        <br />
        <br />
        <div>
            <label htmlFor="equipe_id" className="block text-sm font-medium text-white">Equipe</label>
            <select
              id="equipe_id"
              name="equipe_id"
              value={newAvaliacao.equipe_id}
              onChange={(e) => setNewAvaliacao({...newAvaliacao, equipe_id: parseInt(e.target.value)})}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-black border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">Selecione uma equipe</option>
              {equipes.map((equipe) => (
                <option key={equipe.id} value={equipe.id}>
                  {equipe.name}
                </option>
              ))}
            </select>
        </div>
        <br />
        <br />
        <button
            type="button"
            onClick={makePostRequest}
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Cadastrar
        </button>
        <br />
        <br />
        <button
            type="button"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/")}
        >
            Cancelar
        </button>
      </section>
    </div>
  );
}
