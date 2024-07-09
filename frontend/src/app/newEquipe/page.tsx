"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../services/api";


export default function NewEquipe() {
  const router = useRouter();
  const [name, setName] = useState("");

  const makePostRequest = async () => {
    try {
      const response = await api.post("/equipes", {
        name: name,
      });

      console.log("Dados enviados com sucesso!");
      console.log("Resposta:", response.data);
      router.push("/");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900  my-8">
      <form className="flex flex-col gap-3 p-12 items-center w-[50%] bg-gray-700 rounded-md">
        <div className="flex flex-col gap-3 items-center bg-gray-700  text-green-500 justify-center w-[97%]">
          <label>Nome da equipe</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            className="border border-gray-300 w-[50%] rounded-md px-3 py-2 mb-3 text-black"
          />
        </div>

        <div className="flex flex-row gap-6 items-center justify-center w-[97%]">
          <button
            type="button"
            onClick={makePostRequest}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Cadastrar equipe
          </button>

          <button
            type="button"
            onClick={() => router.push("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
