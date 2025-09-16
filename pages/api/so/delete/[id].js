/**
 * Nome do arquivo: delete.js
 * Data de criação: 26/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidade de apagar/deletar uma Ordem de Serviço com requisições HTTP.
 *
 * Este script é parte o curso de ADS.
 */
import { deleteSo } from "@/repository/so";

export default async function handler(req, res){
    if(req.method !== 'DELETE'){
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).end(`Method ${req.method} not Allowed!`)
    }

    try {
        const {id} = req.query;

        await deleteSo(id);
        return res.status(200).json({messsage: "Service Order deleted successfully!"});

    } catch (error) {
        console.log("Failed to delete the Service Order", error);
        return res.status(500).json({message: "An error occurred on the server."});
    }
}