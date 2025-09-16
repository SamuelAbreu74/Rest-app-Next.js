/**
 * Nome do arquivo: read.js
 * Data de criação: 09/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável pela rota que implementa as funcionalidade de obter/ler os dados dos clientes com requisições HTTP.  
 *
 * Este script é parte o curso de ADS.
 */


import { getClient } from "@/repository/client";


export default async function handler(req, res) {
    if (req.method !== 'GET'){
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${req.method} not Allowed!`);
    }

    try {
        const clients = await getClient();

        res.status(200)
        res.send(clients)
    } catch (error) {
      console.log("Failure on clients search", error);
      return res.status(500).json({message: "An error occurred on the server"});
    }
    
}


