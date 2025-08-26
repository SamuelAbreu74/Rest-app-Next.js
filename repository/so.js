/**
 * Nome do arquivo: so.js
 * Data de criação: 26/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável por ser uma camada de abstração que armazena toda a lógica de acesso ao banco de dados e funções do CRUD para manipulação dos
 * dados das ordens de serviço, que serão implementadas dentro das rotas
 * 
 * Este script é parte o curso de ADS.
 */

import { db } from "@/lib/firebase";
import { addDoc, getDocs, updateDoc, collection, doc, deleteDoc } from "firebase/firestore";

// ------------ POST Function (CREATE) ------------
export async function createSo(soData) {
    const soColletion = collection(db, "Orders");
    const newSo = await addDoc(soColletion, soData);
    return {message: "Service Order created successfully", id: newSo.id}
}

// ------------ GET Function (READ) ------------ 
export async function getSo() {
    const soColletion = collection(db, "Orders");
    const soSnapshot = await getDocs(soColletion);
    const soList = soSnapshot.docs.map(doc => {
        return{
            id: doc.id,
            ...doc.data()
        }
    })
    return soList;
}

// ------------ PUT/PATCH Function (UPDATE) ------------
export async function updateSo(soData) {
    const soRef = doc(db, "Orders", soData.id);
    await updateDoc(soRef, soData);
    return{message: "Service Order updated successfully!", id: soData.id}
}

// ------------ DELETE Function (DELETE) ------------
export async function deleteSo(soId) {
    const soRef = doc(db,"Orders", soId)
    await deleteDoc(soRef);
    return{message: "Service Order deleted successfully!", id: soId}
}