import { FiMessageSquare } from 'react-icons/fi';

export default function AskFedEx() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <FiMessageSquare className="w-12 h-12 text-purple-800" />
          </div>
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
            Pregúntale a FedEx
          </h2>
          <p className="text-center text-gray-600 mb-8">
            ¿Tienes dudas? Nuestro asistente virtual está aquí para ayudarte 24/7
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-800 text-white px-8 py-3 rounded-lg hover:bg-purple-900 transition-colors">
              Iniciar chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}