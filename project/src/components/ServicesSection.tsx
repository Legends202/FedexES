import { FiPackage, FiTruck, FiGlobe, FiBox } from 'react-icons/fi';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: <FiPackage className="h-8 w-8" />,
      title: "Enviar ahora",
      description: "Crea un envío sin una cuenta"
    },
    {
      icon: <FiTruck className="h-8 w-8" />,
      title: "Encontrar ubicaciones",
      description: "Encuentra ubicaciones de FedEx cerca de ti"
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      title: "Obtener tarifas y tiempos",
      description: "Calcula costos de envío y tiempos de entrega"
    },
    {
      icon: <FiBox className="h-8 w-8" />,
      title: "Programar una recolección",
      description: "Solicita que FedEx recoja tus paquetes"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-purple-800 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}