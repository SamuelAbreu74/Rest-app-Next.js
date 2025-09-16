/**
 * Nome do arquivo: delete.js
 * Data de criação: 24/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidade de apagar/deletar um client com requisições HTTP.
 *
 * Este script é parte o curso de ADS.
 */
import { deleteClient } from "@/repository/client.js"

export default async function handler(req, res){
    if(req.method !== 'DELETE'){
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).end(`Method ${req.method} not Allowed!`)
    }

    try {
        const {id} = req.query
        await deleteClient(id)
        return res.status(200).json({message: "Client deleted successfully!"});
        
    } catch (error) {
        console.log("Failed to delete the client", error);
        return res.status(500).json({message: "An error occurred on the server"});
    }
}
