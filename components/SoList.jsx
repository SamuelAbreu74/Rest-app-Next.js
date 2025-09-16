/**
 * Nome do arquivo: SoList.jsx
 * Data de criação: 03/09/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este componente é responsável por listar as Ordens de Serviço.
 *
 * Este script é parte o curso de ADS.
 */

import { useState, useEffect } from "react";
import Modal from "./Modal";
import EditSoModal from "./EditSoModal";

export default function SoList(){
    const [so, setSo] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderToEdit, setOrderToEdit] = useState(null);
    const [message, setMessage] = useState('');

    // =-=-=-=-=-=-= Fetch on Read Route =-=-=-=-=-=-= 
    const allOrders = async () => {
        try {
            const response = await fetch('/api/so/read', {
                method: 'GET',
                headers: {'Content-Type' : 'application/json'},
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went Wrong")
            }
            
            setSo(result);
            setMessage('Ordens de Serviço carregadas com sucesso!');

        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };


    // =-=-=-=-=-=-= Fetch on Delete Route =-=-=-=-=-=-=
    const deleteOrder = async (id) => {
        try {
            const response = await fetch(`/api/so/delete/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'},
            });

            const result = await response.json();

            if (!response.ok){
                throw new Error(result.message || "Something went Wrong")
            }
            setMessage('Ordem de Serviço Deletada com Sucesso!');

        } catch (error) {
            setMessage(`Error: ${error.mesage}`);
        }
    }

    useEffect(() => {
        allOrders();
    }, []);


    // =-=-=-=-=-=-= Delete Handle =-=-=-=-=-=-=
    const handleDeleteClick = async (id) => {
        await deleteOrder(id);
        setMessage('Service Order deleted!');
        allOrders()
    };

    // =-=-=-=-=-=-= Edit Handle =-=-=-=-=-=-=
    const handleEditClick = async (order) => {
        setOrderToEdit(order);
        setIsModalOpen(true);
    }
    
    // =-=-=-=-=-=-= Close Modal Handle =-=-=-=-=-=-=
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setOrderToEdit(null);
    }

    // =-=-=-=-=-=-= Save Sucess Handle =-=-=-=-=-=-=
    const handleSaveSuccess = () => {
        handleCloseModal();
        allOrders();
        setMessage('Ordem de Serviço atualizada com sucesso!');
    }

    return(
        <div className="flex justify-center align-middle flex-col">
            <h1 className="text-4xl">Lista de Ordens de Serviço</h1>
            <p className="text-emerald-700">{message}</p>
            {so.length === 0 ? (
                <p>No service orders found.</p>
            ) : (
                <div className="size-300 flex m-5 justify-center align-middle">
                    <ul>
                        {so.map((order) => (
                            <li id="client-container" className="border-2 border-indigo-400  bg-indigo-950 text-white rounded-2xl mb-8 p-5 font-bold shadow-2xl shadow-blue-950 text-2xl w-3xl" key={order.id}>
                                <h3>Descrição: {order.description}</h3>
                                <p>Status: {order.status}</p>
                                <p>Custo: ${order.cost}</p>
                                <p>Data: {order.date}</p>
                                <p>Cliente Associado: {typeof order.client === 'object' ? order.client.name : order.client}</p>

                                <br />

                                <button onClick={() => handleEditClick(order)} className="px-6 py-3 text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-700 rounded-full transition-colors duration-200 shadow-lg mr-3" >Editar</button>
                                <button onClick={() => handleDeleteClick(order.id)} className="px-6 py-3 text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-700 rounded-full transition-colors duration-200 shadow-lg">Deletar</button>
                               
                            </li>
                        ))}
                        
                    </ul>
                    {isModalOpen && (
                        <Modal onClose={() => setIsModalOpen(false)}>
                            <div className="text-center">
                                <EditSoModal order={orderToEdit} onSaveSuccess={handleSaveSuccess} />
                            </div>
                        </Modal>
                    )}
                </div>
            )}
        </div>
    );
}