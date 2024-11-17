import { FiBox, FiTruck, FiCheckCircle } from 'react-icons/fi';

export default function PackageInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Información del Paquete</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Estado: <span className="text-purple-800">En tránsito</span></h2>
          
          <div className="space-y-4">
            <div>
              <span className="font-semibold">Origen:</span> Aguascalientes
            </div>
            <div>
              <span className="font-semibold">Destino:</span> Guadalajara
            </div>
            <div>
              <span className="font-semibold">Entrega Estimada:</span> 2024-12-24
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Línea de Tiempo del Envío</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="text-purple-800">
                <FiBox className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Paquete recibido</div>
                <div className="text-gray-600">2024-12-20</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-purple-800">
                <FiTruck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">En tránsito</div>
                <div className="text-gray-600">2024-12-22</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-gray-400">
                <FiCheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-gray-400">Entrega estimada</div>
                <div className="text-gray-400">2024-12-24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}