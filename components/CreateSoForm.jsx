/**
 * Nome do arquivo: CreateSoForm.jsx
 * Data de criação: 03/09/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 *  Este componente é responsável pelo formulário de criação de Ordens de Serviço e sua lógica de acesso as rotas.
 *
 * Este script é parte o curso de ADS.
 */


import { useEffect, useState } from "react";

export default function CreateOsForm(){

    // =-=-=-=-=-=-= Create a state for each form value =-=-=-=-=-=-=
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To do');
    const [cost, setCost] = useState(0);
    const [date, setDate] = useState('');
    const [client, setClient] = useState('');
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [message, setMessage] = useState('');

    // =-=-=-=-=-=-= Fetch on Read Route =-=-=-=-=-=-=
    // Obs: It's necessary for Client Dropdown
    useEffect(() => {
      async function fetchClients() {
        const response = await fetch('/api/Clients/read');
        const clientData = await response.json();
        setClients(clientData);
      }

      fetchClients()
    }, []);
    // =-=-=-=-=-=-= Create Service Order Endpoint Access Logic =-=-=-=-=-=-= 
    const handleSubmit = async (event) => {
        event.preventDefault();

        // =-=-=-=-=-=-= Body of ClientData =-=-=-=-=-=-= 
        const orderData = {
            description: description,
            status: status,
            cost: cost,
            date: date,
            client: selectedClient
        }


        

        // =-=-=-=-=-=-= Fetch on Create Route =-=-=-=-=-=-= 
        try {
            const response = await fetch('/api/so/create', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(orderData)
            });
    
            // Result === NewOrderData
            const result = await response.json();
    
            if(!response.ok){
                throw new Error(result.message || "Something went Wrong")
            }
            
            setMessage(`Ordem de Serviço criada com sucesso!`);

            setDescription('');
            setStatus('');
            setCost('');
            setDate('');
            setClient('');

        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    } 


    // =-=-=-=-=-=-= Create Service Order Form =-=-=-=-=-=-=
    return(
        <form onSubmit={handleSubmit} className="font-bold flex flex-col justify-center items-start gap-5  border-2 border-black rounded-2xl bg-gray-900 p-5 w-150 h-100 ml-120 mt-60 shadow-md shadow-gray-950">
            <h1 className="text-3xl">Criar Ordem de Serviço</h1>
            {/* Description */}
            <div className="flex gap-5">
                <label htmlFor="description">Descrição: </label>
                <br />
                <textarea className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded w-100 max-h-18  text-white" name="description" id="description" value={description}onChange={(e) => setDescription(e.target.value)} required></textarea>
            </div>
            {/* Status */}
            <div className="flex gap-5">
                <label htmlFor="status">Status: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="text" value={status} onChange={(e) => setStatus(e.target.value)} required/>
            </div>
            {/* Cost */}
            <div className="flex gap-5">
                <label htmlFor="cost">Custo: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="text" value={cost} onChange={(e) => setCost(e.target.value)} required/>
            </div>
            {/* Date */}
            <div className="flex gap-5">
                <label htmlFor="date">Data: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            {/* Client Associated */}
            <div className="flex gap-5">
                <label htmlFor="client">Cliente Associado: </label>
                <select id="client" value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)} required className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="text">
                    <option value="">Escolha um Cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.name}>
                            {client.name}
                        </option>
                    ))}
                </select>
            </div>
            <button className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded cursor-pointer w-50 " >Save</button>
            <p>{message}</p>
        </form>
    )
}