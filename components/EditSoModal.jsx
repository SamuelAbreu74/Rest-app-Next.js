/**
 * Nome do arquivo: EditSoModal.jsx
 * Data de criação: 03/09/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este componente é responsável pelo formulário de edição de Ordens de Serviço e sua lógica de acesso as rotas.
 *
 * Este script é parte o curso de ADS.
 */



import { useEffect, useState } from "react";

export default function EditSoModal({order,  onSaveSuccess}){

    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [cost, setCost] = useState('');
    const [date, setDate] = useState('');
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [client, setClient] = useState('');
    const [message, setMessage] = useState('');

    
    // =-=-=-=-=-=-= Fill the form with OrderData =-=-=-=-=-=-=
    useEffect(() => {
        if(order){
            setDescription(order.description);
            setStatus(order.status);
            setDate(order.date);
            setCost(order.cost);
            setClient(order.client);
        }
    }, [order])

    // =-=-=-=-=-=-= Fetch on Read Route =-=-=-=-=-=-=
    // Obs: It's necessary for Client Dropdown
    useEffect(() => {
      async function fetchClients() {
        const response = await fetch('/api/clients/read');
        const clientData = await response.json();
        setClients(clientData);
      }

      fetchClients()
    }, []);


    // =-=-=-=-=-=-= Edit Order Endpoint Access Logic =-=-=-=-=-=-= 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('Saving...');
        


        // =-=-=-=-=-=-= Body of OrderData =-=-=-=-=-=-= 
        const orderToEditData = {
            id: order.id,
            description: description,
            status: status,
            cost: cost,
            date: date,
            client: selectedClient
        }


        try {
            // =-=-=-=-=-= Fetch on Update Route =-=-=-=-=-= 
            const response = await fetch('api/so/update', {
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(orderToEditData)
            })

             if(!response.ok){
                const result = await response.json()
                throw new Error(result.message || "Something went Wrong")
            }

            setMessage(`Order Edited Successfuly!`);

            if (onSaveSuccess) {
                onSaveSuccess();
            }



        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="font-bold flex flex-col justify-center items-start gap-5 bg-gray-900 ">
             <h1 className="text-3xl mb-4">Editar Ordem de Serviço</h1>
            {/* Description */}
            <div className="flex gap-5">
                <label htmlFor="description">Descrição: </label>
                <br />
                <textarea className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded w-70 max-h-18  text-white" type="text" id="description" maxlength="50" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
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
                <select id="client" value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)} required className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="text">
                    <option value="">Escolha um Cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.name}>
                            {client.name}
                        </option>
                    ))}
                </select>
            </div>
            <button className="bg-slate-900 border-3 hover:bg-blue-950 border-black w-60 rounded cursor-pointer" type="submit" >Save</button>
            {message && <p className="text-sm mt-2">{message}</p>}
        </form>
    );
}