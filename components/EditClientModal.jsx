/**
 * Nome do arquivo: EditClientModal.jsx
 * Data de criação: 03/09/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 *  Este componente é responsável pelo formulário de edição de Clientes e sua lógica de acesso as rotas.
 *
 * Este script é parte o curso de ADS.
 */



import { useEffect, useState } from "react";

export default function EditClientModal({client, onSaveSuccess}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // =-=-=-=-=-=-= Fill the form with ClientData =-=-=-=-=-=-=
    useEffect(() => {
        if(client){
            setName(client.name);
            setEmail(client.email);
            setAddress(client.address);
            setPhone(client.phone);
        }
    }, [client])

    // =-=-=-=-=-=-= Edit Client Endpoint Access Logic =-=-=-=-=-=-= 
    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage('Saving...');
        
        // =-=-=-=-=-=-= Body of ClientData =-=-=-=-=-=-= 
        const clientToEditBody = {
            id: client.id,
            name: name,
            email: email,
            address: address,
            phone: phone
        }

        // =-=-=-=-=-=-= Fetch on Update Route =-=-=-=-=-=-= 
        try {
            const response = await fetch('api/Clients/update', {
                // Fetch Configs
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(clientToEditBody)
            });

            
            if(!response.ok){
                const result = await response.json()
                throw new Error(result.message || "Something went Wrong")
            }
           
            setMessage(`Client Edited Successfuly!`);
            
            if (onSaveSuccess) {
                onSaveSuccess();
            }


        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    }

   
    // =-=-=-=-=-=-= Edit Client Modal Form =-=-=-=-=-=-= 
    return (
        <form onSubmit={handleSubmit} className="font-bold bg-gray-900  text-white duration-1000 flex flex-col justify-evenly items-start size-95 rounded p-5 gap-5">
            <div className="flex gap-5">
                <label htmlFor="name">Nome: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="flex gap-5">
                <label htmlFor="email">Email: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="flex gap-5">
                <label htmlFor="address">Endereço: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="flex gap-5">
                <label htmlFor="phone">Telefone: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button className="bg-slate-900 border-3 hover:bg-blue-950 border-black w-60 rounded cursor-pointer" type="submit" >Save</button>
            {message && <p className="text-sm mt-2">{message}</p>}
        </form>
    )
}