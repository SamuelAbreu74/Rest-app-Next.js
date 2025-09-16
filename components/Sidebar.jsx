/**
 * Nome do arquivo: Sidebar.jsx
 * Data de criação: 03/09/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este componente é responsável por carregar a barra lateral de navegação.
 *
 * Este script é parte o curso de ADS.
 */


export default function Sidebar( {  setView }){
    return(
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-2">
        <header className=" bg-gray-800 shadow p-4">
          <h1 className="text-3xl font-extrabold text-white"><button onClick={() => {setView(null)}} className="cursor-pointer">Nexus Application</button></h1>
        </header>
        <button onClick={() => {setView("createClient")}} className="px-4 py-2 rounded hover:bg-gray-700 text-left cursor-pointer" > Cadastrar Clientes </button>
        <button onClick={() => {setView("listClients")}} className="px-4 py-2 rounded hover:bg-gray-700 text-left cursor-pointer"> Clientes Cadastrados </button>
        <button onClick={() => {setView("createSo")}} className="px-4 py-2 rounded hover:bg-gray-700 text-left cursor-pointer"> Cadastrar Ordem de Serviço </button> 
        <button onClick={() => {setView("soList")}} className="px-4 py-2 rounded hover:bg-gray-700 text-left cursor-pointer"> Ordens de Serviço </button>
    </aside>

    )

    
}