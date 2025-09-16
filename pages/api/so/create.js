/**
 * Nome do arquivo: create.js
 * Data de criação: 26/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidades de criação de Ordens de Serviço com requisições HTTP.
 *
 * Este script é parte o curso de ADS.
 */

import { createSo } from "@/repository/so"; 

export default async function handler(req, res){
    if (req.method !== 'POST'){
        res.setHeader('Allow', ['POST'])
        return res.status(405).end(`Method ${req.method} not Allowed!`)
    }

    try {
        
        const soData = req.body;

        if(!soData.client || !soData.status || !soData.cost || !soData.date){
            return res.status(400).end({message: "It is necessary to fill in all fields of the form!"});
        }

        const newSo = await createSo(soData);
        return res.status(201).json({id: newSo.id, message: "New Service Order create successfully!"});
    } catch (error) {
        console.log("Failed to create a new Service Order", error);
        return res.status(500).json({message: "An error occurred on the server"});
    }
}