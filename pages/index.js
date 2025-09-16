/**
 * Nome do arquivo: index.jsx
 * Data de criação: 03/09/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 *  Este é o arquivo principal que gerencia a navegação entre diferentes componentes da aplicação.
 *
 * Este script é parte o curso de ADS.
 */


import ClientsList from "@/components/ClientsList";
import CreateClientForm from "@/components/CreateClientForm";
import CreateSoForm from "@/components/CreateSoForm";
import Sidebar from "@/components/Sidebar";
import SoList from "@/components/SoList";
import { useState } from "react";


export default function Home() {
  const [view, setView] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <Sidebar setView={setView} />

      {/* Main Area */}
      <div className="flex flex-col flex-1 bg-blue-950">
        {/* Changeable Screen */}
        <main className="flex-1 p-6 overflow-y-auto">
          {view === "createClient" && <CreateClientForm />}
          {view === "listClients" && <ClientsList />}
          {view === "createSo" && <CreateSoForm/>}
          {view === "soList" && <SoList/>}
          {!view && (
            <div className="flex justify-center items-center h-full text-gray-500">
              Bem-vindo ao <span className="font-bold ml-1">Nexus APP!</span>
            </div>
          )}
        </main>
      </div>
    </div>
  );

}
