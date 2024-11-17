import { FiTruck, FiPackage, FiGlobe } from 'react-icons/fi';

export default function PromoSection() {
  const features = [
    {
      icon: <FiTruck className="w-12 h-12" />,
      title: "Envíos Express",
      description: "Entrega al siguiente día hábil en destinos principales"
    },
    {
      icon: <FiPackage className="w-12 h-12" />,
      title: "Embalaje Gratuito",
      description: "Suministros de envío sin costo para clientes FedEx"
    },
    {
      icon: <FiGlobe className="w-12 h-12" />,
      title: "Cobertura Global",
      description: "Envíos a más de 220 países y territorios"
    }
  ];

  return (
    <div className="bg-purple-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Abre tu cuenta FedEx
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Tarifas preferenciales en envíos
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Herramientas de envío en línea
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Facturación centralizada
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Soporte personalizado
              </li>
            </ul>
            <div className="space-x-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Registrarme ahora
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-800 transition-colors">
                Más información
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/images/shipping-boxes.svg" 
              alt="FedEx Shipping" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-white mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}