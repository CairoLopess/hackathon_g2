"use client";

import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { IEquipe } from "@/interfaces/IEquipe";
import { useRouter } from "next/navigation";

async function fetchEquipes(): Promise<IEquipe[]> {
  const result = await api.get("/equipes");
  return result.data;
}

export default function Home() {
  const [equipes, setEquipes] = useState<IEquipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const [filteredEquipes, setFilteredEquipes] = useState<IEquipe[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const getEquipes = async () => {
      const equipesData = await fetchEquipes();
      setEquipes(equipesData);
      setFilteredEquipes(equipesData);
      setLoading(false);
    };
    getEquipes();
  }, []);

  const handleDelete = async (equipeId: number | undefined) => {
    try {
      await api.delete(`/equipes/${equipeId}`);
      
      setEquipes(equipes.filter((equipe) => equipe.id !== equipeId));
      setFilteredEquipes(filteredEquipes.filter((equipe) => equipe.id !== equipeId));
      
    } catch (error) {
      console.error("error to delete team", error);
    }
  };

  const handleSearch = () => {
    const filtered = equipes.filter((equipe) =>
      equipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEquipes(filtered);
  };

  if (loading) {
    return (
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Carregando...</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-8 px-4 bg-gray-900 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Equipes</h1>
     
      <div className="flex mb-8 mt-8 justify-center items-center">
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 text-black rounded-md px-3 py-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Filtrar
        </button>
      </div>
      <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
          <button
              onClick={() => router.push("/newEquipe")}
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-2"
          >
              Adicionar nova equipe
          </button>
      </div>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredEquipes.length > 0 ? (
          filteredEquipes.map((equipe: IEquipe) => {
            return (
              <div
                key={equipe.id}
                className="rounded-lg overflow-hidden bg-gray-700  shadow-lg flex flex-col mb-10"
              >
                <div className="px-6 py-4 flex-grow flex flex-col justify-between">
                  <h2 className="font-bold text-xl text-white text-center uppercase mb-2 h-auto overflow-hidden">
                    {equipe.name}
                  </h2>
                </div>
                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <button
                    onClick={() => handleDelete(equipe.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Nenhuma equipe encontrada!</h1>
        )}
      </section>
    </main>
  );
}
