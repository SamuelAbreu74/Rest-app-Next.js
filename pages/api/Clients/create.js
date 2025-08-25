/**
 * Nome do arquivo: create.js
 * Data de criação: 14/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidades de criação de clientes com requisições HTTP.
 *
 * Este script é parte o curso de ADS.
 */

import { createClient } from "@/repository/client"

export default async function handler(req, res){
    if (req.method !== 'POST'){
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} not Allowed!`)    
    }

    try {
        const clientData = req.body;

        if(!clientData.name || !clientData.email || !clientData.phone || !clientData.address){
            res.status(400).json({message: "It is necessary to fill in all fields of the form!"})
        }
        const newClient = await createClient(clientData);
        res.status(201).json({id: newClient.id, message: "New client created successfully!"});
    } catch (error) {
        console.log("Failed to create a new client", error);
        res.status(500).json({message: "An error occurred on the server"});
    }
}


