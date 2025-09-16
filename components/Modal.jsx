/**
 * Nome do arquivo: clientsPage.js
 * Data de criação: 16/08/2025
 * Autor: Samuel de Abreu Moisés
 * Matrícula: 01762413
 *
 * Descrição:
 * Este componente é como um container dos modais de formulário.
 *
 * Este script é parte o curso de ADS.
 */



export default function Modal({onClose, children} ) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-0 ">
            <div className="bg-gray-900  shadow-xl shadow-gray-950  p-6  max-w-md relative border-2 border-black rounded-2xl ">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-600 transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};
