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
    feita: false});
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

//   if (!userAuth || userAuth.uid !== avaliacao?.avaliador_id || avaliacao.feita) {
//     router.push("/signIn");
//   }

  console.log(avaliacao?.notas);
  console.log(avaliacao?.avaliador_id);
  console.log(userAuth?.uid);

  return (
    
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      <section className="bg-gray-800 p-8 rounded-lg shadow-lg text-white-100">
        <h1 className="text-3xl font-bold mb-4 text-green-500">
          Notas equipe {equipes.find((equipe) => equipe.id === avaliacao?.equipe_id)?.name}
        </h1>
        <h1 className="text-3xl text-green-500 font-bold mb-4">
          Avaliador(a): {avaliadores.find((avaliador) => avaliador.id === avaliacao?.avaliador_id)?.name} 
        </h1>
        
        {Object.keys(avaliacao?.notas).map((key) => (
          <div key={key} className="mb-4">
            <label htmlFor={key} className="block font-bold mb-2 text-green-500">
              {key}: Nota {avaliacao?.notas[key]}
            </label>
          </div>
        ))} 
        
        
        <br />
        <br />
        {(userAuth?.uid === avaliacao?.avaliador_id)?
        <button
          type="button"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
          onClick={() => router.push(`/addNota/${avaliacao?.id}`)}
        >
          Editar Nota
        </button>
      : null}
        <button
          type="button"
          className="w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:shadow-outline"
          onClick={() => router.back()}
        >
          Voltar
        </button>
      </section>
    </div>
  );
}
