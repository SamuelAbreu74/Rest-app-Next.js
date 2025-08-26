/**
 * Nome do arquivo: read.js
 * Data de criação: 26/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidade de obter/ler os dados das Ordens de Serviço com requisições HTTP.  
 *
 * Este script é parte o curso de ADS.
 */

import { getSo } from "@/repository/so";

export default async function handler(req, res) {
    if (req.method !== 'GET'){
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} not Allowed!`);
    }

    try {
        const So = await getSo();

        res.status(200);
        res.send(So);

    } catch (error) {
        console.log("Failed to search for Service Orders");
        res.status(500).json({message: "An error occurred on the server!"});
    }
}
