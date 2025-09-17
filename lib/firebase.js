/**
 * Nome do arquivo: firebase.js
 * Data de criação: 09/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este arquivo vai ser responsável por inicializar, configurar e exportar o Banco de Dados (no cado Firebase/firestore).
 *
 * Este script é parte o curso de ADS.
 */



import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN_FIREBASE,
  projectId: process.env.NEXT_PUBLIC_PROJECTID_FIREBASE,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET_FIREBASE,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGID_FIREBASE,
  appId: process.env.NEXT_PUBLIC_APPID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };