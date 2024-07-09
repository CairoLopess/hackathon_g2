'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../services/api";
import { IAvaliador } from "@/interfaces/IAvaliador";
import { useRouter } from "next/navigation";

async function fetchAvaliadores(): Promise<IAvaliador[]> {
  const result = await api.get("/avaliadores");
  return result.data;
}

export default function Home() {
  const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredAvaliadores, setFilteredAvaliadores] = useState<IAvaliador[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const getAvaliadores = async () => {
      const avaliadoresData = await fetchAvaliadores();
      setAvaliadores(avaliadoresData);
      setFilteredAvaliadores(avaliadoresData);
      setLoading(false);
    };
    getAvaliadores();
  }, []);

  const handleDelete = async (avaliadorId: string | undefined) => {
    try {
      await api.delete(`/avaliadores/${avaliadorId}`);
      
      setAvaliadores(avaliadores.filter((avaliador) => avaliador.id !== avaliadorId));
      setFilteredAvaliadores(filteredAvaliadores.filter((avaliador) => avaliador.id !== avaliadorId));
      
    } catch (error) {
      console.error("Erro ao excluir avaliador", error);
    }
  };

  const handleSearch = () => {
    const filtered = avaliadores.filter((avaliador) =>
      avaliador.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAvaliadores(filtered);
  };

  if (loading) {
    return (
      <main className=" bg-gray-900 ">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Carregando...</h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <main className="flex-1 container mx-auto mt-8 px-4 flex flex-col ">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-500 ">Avaliadores</h1>
      <div className="flex mb-8 mt-8 justify-center items-center">
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300  text-black rounded-md px-3 py-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
        >
          Filtrar
        </button>
      </div>
      <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
          <button
              onClick={() => router.push("/newAvaliador")}
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-2"
          >
              Adicionar novo avaliador
          </button>
      </div>
      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredAvaliadores.length > 0 ? (
          filteredAvaliadores.map((avaliador: IAvaliador) => {
            return (
              <div
                key={avaliador.id}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col mb-10"
              >
                <div className="px-6 py-4 flex-grow flex flex-col justify-between">
                  <h2 className="font-bold text-xl text-gren-500 text-center uppercase mb-2 h-auto overflow-hidden">
                    {avaliador.name}
                  </h2>
                </div>
                <div className="px-6 pt-4 pb-4 flex items-center justify-center text-center">
                  <button
                    onClick={() => handleDelete(avaliador.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Excluir
                  </button>
                  <Link href={`/createName/${avaliador.id}`}>
                    <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mr-2">
                      Alterar Nome
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-white text-center">Nenhum avaliador encontrado!</h1>
        )}
      </section>
      </main>
    </div>
  );
}









