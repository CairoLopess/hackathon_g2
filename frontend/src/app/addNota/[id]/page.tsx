"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IEquipe } from "@/interfaces/IEquipe";
import api from "../../../services/api";
import { IAvaliacao } from "@/interfaces/IAvaliacao";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useAuthContext } from "../../../context/AuthContext";
import { IAvaliador } from "@/interfaces/IAvaliador";

interface IPostParams extends Params {
  id: number;
}

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
  const { userAuth } = useAuthContext();
  const [equipes, setEquipes] = useState<IEquipe[]>([]);
  const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
  const [avaliacao, setavAvaliacao] = useState<IAvaliacao>({
    avaliador_id: "",
    equipe_id: 0,
    notas: {},
    feita: false
  });
  const params: IPostParams = useParams();
  const { id } = params;

  useEffect(() => {
    const getDados = async () => {
      const equipesData = await fetchEquipes();
      setEquipes(equipesData);
      
      const avaliacaoData = await api.get(`/avaliacoes/${id}`);
      setavAvaliacao(avaliacaoData.data);

      const avaliadoresData = await fetchAvaliadores();
      setAvaliadores(avaliadoresData);
    };

    getDados();
  }, []);

  if (!userAuth?.uid) {
    router.push("/signIn");
  }

  const makePostRequest = async () => {
    try {
      const response = await api.put(`/avaliacoes/${id}`, {
        ...avaliacao, feita: true
      });

      console.log("Dados enviados com sucesso!");
      console.log("Resposta:", response.data);
    } catch (error) {
      console.error("Erro:", error);
    }

    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <main className="flex-1 container mx-auto mt-8 px-4 flex flex-col justify-center items-center">
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-4 text-center text-green-500">
            Avaliar Equipe {equipes.find((equipe) => equipe.id === avaliacao.equipe_id)?.name}
          </h1>
          {Object.keys(avaliacao.notas).map((key) => (
            <div key={key} className="mb-4">
              <label htmlFor={key} className="block font-bold mb-2 text-green-400">
                {key}
              </label>
              <select
                id={key}
                name={key}
                value={avaliacao.notas[key]}
                onChange={(e) => setavAvaliacao({...avaliacao, notas: { ...avaliacao.notas, [key]: e.target.value }})}
                className="w-full border border-gray-400 p-2 rounded bg-gray-700 text-white"
              >
                <option value="">Selecione uma nota</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          ))}
          <div className="flex justify-between w-full">
            <button
              type="button"
              onClick={makePostRequest}
              className="w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
            >
              Cadastrar
            </button>
            <button
              type="button"
              className="w-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
              onClick={() => router.push("/")}
            >
              Cancelar
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
