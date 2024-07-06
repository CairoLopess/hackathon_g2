"use client";

import React from "react";
import signUp from "../../services/firebase/auth/signUp";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../services/api";
import { IAvaliadorFormData } from "@/interfaces/IAvaliador";
import { useAuthContext } from "../../context/AuthContext";
import { User } from "firebase/auth";

export default function NewAvaliador() {
  const router = useRouter();
  const [formDataAvaliador, setFormDataAvaliador] = useState<IAvaliadorFormData>({
    id: "",
    login: "",
    senha: "",
  });

  const makePostRequest = async (user: User | undefined) => {
    try {
      const response = await api.post("/avaliadores", {
        ...formDataAvaliador, id: user?.uid
      });

      console.log(userAuth?.uid);
      console.log("Dados enviados com sucesso!");
      console.log("Resposta:", response.data);

      router.push("/");
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userAuth } = useAuthContext();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }
    const user = result?.user;

    console.log(user);
    
    await makePostRequest(user);
  
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
      <section className="bg-white p-8 rounded-lg shadow-lg text-black">
        <h1 className="text-3xl font-bold mb-4">Cadastrar Avaliador</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <label htmlFor="email" className="block">
            <p>Login</p>
            <input
              onChange={(e) => (setEmail(e.target.value), setFormDataAvaliador({ ...formDataAvaliador, login: e.target.value }))}
              required
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password" className="block">
            <p>Password</p>
            <input
              onChange={(e) => (setPassword(e.target.value), setFormDataAvaliador({ ...formDataAvaliador, senha: e.target.value }))}
              required
              type="password"
              name="password"
              id="password"
              className="w-full px-4 py-2 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
              placeholder="password"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Cadastrar
          </button>
          <button
            type="button"
            className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/")}
          >
            Cancelar
          </button>
        </form>
      </section>
    </div>
  );
}
