"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IAvaliador } from "../../interfaces/IAvaliador";
import { IEquipe } from "@/interfaces/IEquipe";
import api from "../../services/api";
import { IAvaliacao } from "@/interfaces/IAvaliacao";
import { useAuthContext } from "../../context/AuthContext";

async function fetchAvaliacoes(): Promise<IAvaliacao[]> {
  const result = await api.get("/avaliacoes");
  return result.data;
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
  const [avaliacoes, setAvaliacoes] = useState<IAvaliacao[]>([]);
  const { userAuth } = useAuthContext();
  const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
  const [equipes, setEquipes] = useState<IEquipe[]>([]);

  useEffect(() => {
    const getDados = async () => {
      const avaliacoesData = await fetchAvaliacoes();
      setAvaliacoes(avaliacoesData.filter((avaliacao) => avaliacao.feita === false && avaliacao.avaliador_id == userAuth?.uid));

      const equipesData = await fetchEquipes();
      setEquipes(equipesData);

      const avaliadoresData = await fetchAvaliadores();
      setAvaliadores(avaliadoresData);
    };
    getDados();
  }, []);

  if (!avaliadores.find((avaliador) => avaliador.id === userAuth?.uid)) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
        <section className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          <h1 className="text-3xl font-bold mb-4">Página apenas para avaliadores</h1>
          <button
            type="button"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/signIn")}
          >
            Fazer Login
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <main className="flex-1 container mx-auto mt-8 px-4 flex flex-col ">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-500">Avaliar</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 bg-gray-900 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {avaliacoes.length > 0 ? (
          avaliacoes.map((avaliacao: IAvaliacao) => {
            return (
              <div
                key={avaliacao.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col mb-10"
              >
                <div className="px-6 py-4 flex-grow flex flex-col justify-between">
                  <h2 className="font-bold text-xl text-white text-center uppercase mb-2 h-auto overflow-hidden">
                    Nome da equipe: {equipes.find((equipe) => equipe.id === avaliacao.equipe_id)?.name}
                  </h2>
                </div>

                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <span className="bg-green-500 rounded-md px-3 py-1 text-sm font-semibold text-white">
                    Avaliador: {avaliadores.find((avaliador) => avaliador.id === avaliacao.avaliador_id)?.name}
                  </span>
                </div>
                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <button
                    onClick={() => router.push(`/addNota/${avaliacao.id}`)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
                  >
                    Avaliar
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-white text-center w-full">Nenhuma avaliação pendente!</h1>
        )}
      </section>
      </main>
    </div>
  );
}
