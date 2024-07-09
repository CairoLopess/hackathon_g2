"use client";

import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { IEquipe } from "@/interfaces/IEquipe";
import { IAvaliacao } from "@/interfaces/IAvaliacao";
import { IAvaliador } from "@/interfaces/IAvaliador";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../context/AuthContext";

async function fetchEquipes(): Promise<IEquipe[]> {
  const result = await api.get("/equipes");
  return result.data;
}

async function fetchAvaliacoes(): Promise<IAvaliacao[]> {
  const result = await api.get("/avaliacoes");
  return result.data;
}

async function fetchAvaliadores(): Promise<IAvaliador[]> {
  const result = await api.get("/avaliadores");
  return result.data;
}

export default function Home() {
  const [equipes, setEquipes] = useState<IEquipe[]>([]);
  const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
  const [avaliacoes, setAvaliacoes] = useState<IAvaliacao[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredAvaliacoes, setFilteredAvaliacoes] = useState<IAvaliacao[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const { userAuth } = useAuthContext();

  useEffect(() => {
    const getDados = async () => {
      const equipesData = await fetchEquipes();
      setEquipes(equipesData);

      const avaliacoesData = await fetchAvaliacoes();
      setAvaliacoes(avaliacoesData);
      setFilteredAvaliacoes(avaliacoesData);

      const avaliadoresData = await fetchAvaliadores();
      setAvaliadores(avaliadoresData);
      setLoading(false);
    };
    getDados();
  }, []);

  const handleSearchEquipe = () => {
    if (searchTerm === "") {
      setFilteredAvaliacoes(avaliacoes);
      return;
    }
    const filtered = avaliacoes.filter(
      (avaliacao) => avaliacao.equipe_id === parseInt(searchTerm)
    );
    setSearchTerm("");
    setFilteredAvaliacoes(filtered);
  };

  const handleSearchAvaliador = () => {
    if (searchTerm === "") {
      setFilteredAvaliacoes(avaliacoes);
      return;
    }
    const filtered = avaliacoes.filter(
      (avaliacao) => avaliacao.avaliador_id === searchTerm
    );
    setSearchTerm("");
    setFilteredAvaliacoes(filtered);
  };

  if (loading) {
    return (
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Carregando...</h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <main className="flex-1 container mx-auto mt-8 px-4 flex flex-col ">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-500">Avaliações</h1>
      <div className="flex flex-col bg-gray-900 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8 mt-8">
        <div className="flex flex-col items-center">
          <select
            id="equipe"
            name="equipe"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded text-black"
          >
            <option value="">Selecione uma equipe</option>
            {equipes.map((equipe) => (
              <option key={equipe.id} value={equipe.id}>
                {equipe.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleSearchEquipe}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
          >
            Buscar Equipe
          </button>
        </div>
        <div className="flex flex-col items-center">
          <select
            id="avaliador"
            name="avaliador"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded text-black"
          >
            <option value="">Selecione um avaliador</option>
            {avaliadores.map((avaliador) => (
              <option key={avaliador.id} value={avaliador.id}>
                {avaliador.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleSearchAvaliador}
            className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
          >
            Buscar Avaliador
          </button>
        </div>
      </div>
      <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
        <button
          onClick={() => router.push("/newAvaliacao")}
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Adicionar nova avaliação
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAvaliacoes.length > 0 ? (
          filteredAvaliacoes.map((avaliacao: IAvaliacao) => (
            <div
              key={avaliacao.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col mb-10"
            >
              <div className="px-6 py-4 flex-grow flex flex-col justify-between">
                <h2 className="font-bold text-xl text-white text-center uppercase mb-2 h-auto overflow-hidden">
                  {equipes.find((equipe) => equipe.id === avaliacao.equipe_id)?.name}
                </h2>
              </div>

              <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                <span className="bg-green-500 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Avaliador(a):{" "}
                  {avaliadores.find((avaliador) => avaliador.id === avaliacao.avaliador_id)
                    ?.name}
                </span>
              </div>
              <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                <span className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Avaliada = {avaliacao.feita ? "Sim" : "Não"}
                </span>
              </div>
              {avaliacao.feita ? (
                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <button
                    onClick={() => router.push(`/avaliacoes/${avaliacao.id}`)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Ver Notas
                  </button>
                </div>
              ) : avaliacao.avaliador_id === userAuth?.uid ? (
                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <button
                    onClick={() => router.push(`/addNota/${avaliacao.id}`)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Adicionar Notas
                  </button>
                </div>
              ) : (
                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2">
                    
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <h1 className="text-xl text-center text-gray-700">Nenhuma avaliação encontrada!</h1>
        )}
      </section>
     </main>
    </div>
  );
}
