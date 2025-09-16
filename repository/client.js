/**
 * Nome do arquivo: client.js
 * Data de criação: 09/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável por ser uma camada de abstração que armazena toda a lógica e funções do CRUD para manipulação dos
 * dados dos clientes, que serão implementadas dentro das rotas
 * 
 * Este script é parte o curso de ADS.
 */



import { db } from "@/lib/firebase";
import { addDoc, getDocs , updateDoc, collection, doc, deleteDoc } from "firebase/firestore";

// Collections === Tables
// Documents === Register/Client

// ------------ POST Function (CREATE) ------------
 export async function createClient(clientData){
    // Get collection Reference
    const collectionRef = collection(db, "Clients");
    // Create a newClient on colletion with clientData
    const newClient = await addDoc(collectionRef, clientData);
    // Return newClient ID for confirmation
    return {message: "Client created successfully!", id: newClient.id};
}

// ------------ GET Function (READ) ------------ 
export async function getClient(){ 

    // get colletion from DB
    const clientColletion = collection(db, "Clients");
    // get documents from colletion
    const clientSnapshot = await getDocs(clientColletion);

    // Organize data from each document
    const clientList = clientSnapshot.docs.map(doc => {
        return{
            id: doc.id,
            ...doc.data()
        }
    })
    return clientList;
};

// ------------ PUT/PATCH Function (UPDATE) ------------
 export async function updateClient(clientData){
    const clientRef = doc(db, "Clients", clientData.id);
    await updateDoc(clientRef, clientData)
    return { message: "Client updated successfully!", id: clientData.id };
 }

// ------------ DELETE Function (DELETE) ------------
 export async function deleteClient(client){
    const clientRef = doc(db, "Clients", client);
    await deleteDoc(clientRef);
    return {message: "Client deleted successfully!", id: client}
 }
