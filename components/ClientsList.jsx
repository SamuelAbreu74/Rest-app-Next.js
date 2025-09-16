/**
 * Nome do arquivo: clientsPage.js
 * Data de criação: 16/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este componente é responsável por acessar a rota read.js e mostrar a lista de clientes na tela do usuário.
 *
 * Este script é parte o curso de ADS.
 */


import { useState, useEffect } from "react"
import Modal from './Modal';
import EditClientModal from "./EditClientModal";

export default function ClientsList() {
    const [clients, setClients] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clientToEdit, setClientToEdit] = useState(null);
    const [message, setMessage] = useState('');


    const allClients = async () => {
        // =-=-=-=-=-=-= Fetch on Read Route =-=-=-=-=-=-= 
        try {
            const response = await fetch('/api/clients/read', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Something went Wrong")
            }

            setClients(result);
            setMessage('Clientes carregados com sucesso!');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }


    const deleteClient = async (client) => {


        // =-=-=-=-=-=-= Fetch on Delete Route =-=-=-=-=-=-=
        try {
            const response = await fetch(`/api/clients/delete/${client.id}`, {
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'},
            });

            
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went Wrong")
            }
            setMessage('Cliente deletado com sucesso!');

        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }


    useEffect(() => {
        allClients();
    }, []);

    // =-=-=-=-=-=-= Edit Handle =-=-=-=-=-=-=
    const handleEditClick = (client) => {
        setClientToEdit(client);
        setIsModalOpen(true);
    }

    // =-=-=-=-=-=-= Close Modal Handle =-=-=-=-=-=-=
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setClientToEdit(null);
    }

    // =-=-=-=-=-=-= Save Sucess Handle =-=-=-=-=-=-=
    const handleSaveSuccess = () => {
        handleCloseModal();
        allClients();
        setMessage('Cliente atualizado com sucesso!');
    }

    // =-=-=-=-=-=-= Delete handle =-=-=-=-=-=-=
    const handleDeleteClick = async (client) => {
        await deleteClient(client);
        allClients();
        setMessage('Cliente deletado com sucesso!');
    }

    return (
        <div className="flex justify-center align-middle flex-col">
            <h1 className="text-4xl">Lista de Clientes</h1>
            <p className="text-emerald-700">{message}</p>
            {clients.length === 0 ? (
                <p>No clients found.</p>
            ) : (
                <div className=" size-300 flex m-5 justify-center align-middle">
                    <ul>
                        {clients.map((client) => {
                            return (
                                <li id="client-container" className="border-2 border-indigo-400  bg-indigo-950 text-white rounded-2xl mb-8 p-5 font-bold shadow-2xl shadow-blue-950 text-2xl w-3xl" key={client.id}>
                                    <h3>Nome: {client.name}</h3>
                                    <br />
                                    <p>Email: {client.email}</p>
                                    <p>Endereço: {client.address}</p>
                                    <p>Telefone: {client.phone}</p>
                                    
                                    <br />
                                    
                                    <button onClick={() => handleEditClick(client)} className="px-6 py-3 text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-700 rounded-full transition-colors duration-200 shadow-lg mr-3">Editar</button>
                                    <button onClick={() => handleDeleteClick(client)} className="px-6 py-3 text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-700 rounded-full transition-colors duration-200 shadow-lg" >Deletar</button>
                                </li>
                            )
                        })}
                    </ul>
                    {isModalOpen && (
                        <Modal onClose={() => setIsModalOpen(false)}>
                            <div className="text-center ">
                                <h2 className="flex justify-center text-2xl font-semibold text-white mb-2">Edit Client</h2>
                                <EditClientModal client={clientToEdit} onSaveSuccess={handleSaveSuccess} />
                            </div>
                        </Modal>
                    )}
                </div>
            )}
        </div>
    );
};