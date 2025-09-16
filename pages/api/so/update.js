/**
 * Nome do arquivo: update.js
 * Data de criação: 26/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as
 * funcionalidades de edição/atualização das Orderns de Serviço com
 * requisições HTTP.  
 *
 * Este script é parte o curso de ADS.
 */

import { updateSo } from "@/repository/so";

export default async function hnadler(req, res) {
    if(req.method !== 'PUT'){
        res.setHeader('Allow', ['PUT']);
        return res.status(405).end(`Method ${req.method} not Allowed!`);
    }

    try {
        const soToEditData = req.body;

        if(!soToEditData.id){
            return res.status(400).end("Bad Request: This Service Order don`t exist");
        }

        await updateSo(soToEditData);
        return res.status(200).end('Service Order updated successfully!');

    } catch (error) {
        console.log("Failure on Service Order update", error);
        return res.status(500).json({message: "An error occurred on the server."});
    }
}