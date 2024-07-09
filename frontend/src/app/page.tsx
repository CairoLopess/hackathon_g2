"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { IAvaliacao } from "@/interfaces/IAvaliacao";
import { IAvaliador } from "@/interfaces/IAvaliador";
import { IEquipe } from "@/interfaces/IEquipe";
import api from "../services/api";

async function fetchAvaliadores(): Promise<any> {
  const result = await api.get("/avaliadores");
  return result.data;
}

async function fetchEquipes(): Promise<any> {
  const result = await api.get("/equipes");
  return result.data;
}

async function fetchAvaliacoes(): Promise<any> {
  const result = await api.get("/avaliacoes");
  return result.data;
}

function Page() {
  const { userAuth, logout } = useAuthContext();
  const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<IAvaliacao[]>([]);
  const [equipes, setEquipes] = useState<IEquipe[]>([]);
  const [avaliador, setAvaliador] = useState<IAvaliador>();
  const router = useRouter();

  useEffect(() => {
    const getDados = async () => {
      const avaliadoresData = await fetchAvaliadores();
      setAvaliadores(avaliadoresData);

      const avaliacoesData = await fetchAvaliacoes();
      setAvaliacoes(avaliacoesData);

      const equipesData = await fetchEquipes();
      setEquipes(equipesData);

      if (userAuth) {
        try {
          const result = await api.get(`/avaliadores/${userAuth.uid}`);
          setAvaliador(result.data);
        } catch (error) {
          console.log("Erro ao buscar avaliador:", error);
        }
      }
    };
    getDados();
  }, [userAuth]);

  const totalAvaliadores = avaliadores.length;
  const totalAvaliacoes = avaliacoes.length;
  const totalEquipes = equipes.length;

  console.log(avaliador);

  return (
    <div className="container mx-auto mt-10 p-4 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-green-500">Página Inicial</h1>
        {avaliador && (
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/addNota")}
          >
            Atribuir Notas
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => router.push("/avaliadores")}
          className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="text-lg font-semibold mb-2 text-green-500">Avaliadores</h2>
          <div className="flex items-center justify-center">
            <p className="text-3xl font-bold text-white">{totalAvaliadores}</p>
          </div>
        </div>

        <div
          onClick={() => router.push("/avaliacoes")}
          className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="text-lg font-semibold mb-2 text-green-500">Avaliações</h2>
          <div className="flex items-center justify-center">
            <p className="text-3xl font-bold text-white">{totalAvaliacoes}</p>
          </div>
        </div>

        <div
          onClick={() => router.push("/equipes")}
          className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="text-lg font-semibold mb-2 text-green-500">Equipes</h2>
          <div className="flex items-center justify-center">
            <p className="text-3xl font-bold text-white">{totalEquipes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
