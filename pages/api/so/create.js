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
import { Timestamp } from "firebase/firestore";



export default async function handler(req, res){
    if (req.method !== 'POST'){
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} not Allowed!`)
    }

    try {
        const soData = req.body;

        if(!soData.Client || !soData.Status || !soData.cost || !soData.date){
            res.status(400).json({message: "It is necessary to fill in all fields of the form!"})
        }

        const newSo = await createSo(soData);
        res.status(201).json({id: newSo.id, message: "New Service Order create successfully!"});
    } catch (error) {
        console.log("Failed to create a new Service Order", error);
        res.status(500).json({message: "An error occurred on the server"});
    }
}