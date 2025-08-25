/**
 * Nome do arquivo: update.js
 * Data de criação: 17/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidades de edição/atualização de Clientes com requisições HTTP.  
 *
 * Este script é parte o curso de ADS.
 */

import { updateClient } from "@/repository/client";


export default async function handler(req,res){
    
    if(req.method !== 'PUT'){
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} not Allowed!`);
    }

    try {
        const clientToEditData = req.body
        
        if(!clientToEditData.id){
            res.status(400).end('Bad Request: This client don`t exist');
        }
        updateClient(clientToEditData)
        res.status(200).end('client update Successfully!')
    } catch (error) {
        console.log("Failure on client update", error);
        res.status(500).json({message: "An error occurred on the server"});
    }



}