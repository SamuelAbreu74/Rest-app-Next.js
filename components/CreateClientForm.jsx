/**
 * Nome do arquivo: clientsPage.js
 * Data de criação: 16/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo é o componente responsável pela lógica e estrutura do formulário de criação de clientes
 *
 * Este script é parte o curso de ADS.
 */

import { useState } from "react"

export default function CreateClientForm(){
    // =-=-=-=-=-=-= Create a state for each form value =-=-=-=-=-=-=
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // =-=-=-=-=-=-= Create Client Endpoint Access Logic =-=-=-=-=-=-= 
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // =-=-=-=-=-=-= Body of ClientData =-=-=-=-=-=-= 
        const clientData = {
            name: name,
            email: email,
            address: address,
            phone: phone
        }
    
        // =-=-=-=-=-=-= Fetch on Create Route =-=-=-=-=-=-= 
        try {
            const response = await fetch('/api/Clients/create', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(clientData),
            });

            // Result === NewClientData 
            const result = await response.json();

            if(!response.ok){
                throw new Error(result.message || "Something went Wrong")
            }

            setMessage(`Cliente Cadastrado com Sucesso!`);
            

            setName('');
            setEmail('');
            setAddress('');
            setPhone('');

        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };
   

    // =-=-=-=-=-=-= CreateClientForm =-=-=-=-=-=-=
    return(
        <form onSubmit={handleSubmit} className="font-bold flex flex-col justify-center items-start gap-5  border-2 border-black rounded-2xl bg-gray-900 p-5 w-150 h-90 ml-120 mt-60 shadow-md shadow-gray-950">
            <h1 className="text-3xl">Cadastrar Cliente</h1>
            {/* Name */}
            <div className="flex gap-5">
                <label htmlFor="name">Nome: </label>

                <input className=" bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            {/* Email */}
            <div className="flex gap-5">
                <label htmlFor="email">Email: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            {/* Address */}
            <div className="flex gap-5">
                <label htmlFor="address">Endereço: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            {/* Phone */}
            <div className="flex gap-5">
                <label htmlFor="phone">Telefone: </label>
                <input className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded" type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <button className="bg-slate-900 border-3 hover:bg-blue-950 border-black rounded cursor-pointer w-50 " type="submit">Salvar</button>
            <p>{message}</p>
        </form>
    )
}