"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import api from "../../../services/api";
import { IAvaliador } from "@/interfaces/IAvaliador";

async function fetchAvaliadores(): Promise<IAvaliador[]> {
  const result = await api.get("/avaliadores");
  return result.data;
}
interface IPostParams extends Params {
  id: string;
}

  export default function addName() {
    const router = useRouter();
    const [name, setName] = useState<string>("");
    const params: IPostParams = useParams();
    const [avaliadores, setAvaliadores] = useState<IAvaliador[]>([]);
    const { id } = params;

    useEffect(() => {
      const getDados = async () => {
        const avaliadoresData = await fetchAvaliadores();
        setAvaliadores(avaliadoresData);
      };
      getDados();
    }, []);

    const updateName = async () => {
      if (avaliadores.find((avaliador) => avaliador.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        alert("Nome ja existente, tente outro");
        return;
      }
      try {
        const response = await api.put(`/avaliadores/${id}`, {
          name: name,
        });
    
        console.log("Dados atualizados com sucesso!");
        console.log("Resposta:", response.data);
        router.push("/");
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
      }
    };

    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-900 justify-center my-8">
        <form className="flex flex-col gap-3 p-12 items-center w-[50%] bg-gray-700 rounded-md">
          <div className="flex flex-col gap-3 items-center justify-center bg-gray-700 w-[97%]">
            <label>Insira o nome para o avaliador</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Novo nome"
              className="border border-green-500 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
            />
          </div>

          <div className="flex flex-row gap-6 items-center justify-center w-[97%]">
            <button
              type="button"
              onClick={updateName}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              Cadastrar nome
            </button>
  
            <button
              type="button"
              onClick={() => router.push("/")}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  };