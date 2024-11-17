import { FiPackage, FiDollarSign, FiClock, FiMapPin } from 'react-icons/fi';

export default function QuickLinks() {
  const links = [
    {
      icon: <FiPackage />,
      title: "Enviar",
      description: "Crea un envío sin cuenta",
      link: "#"
    },
    {
      icon: <FiDollarSign />,
      title: "Cotizar",
      description: "Calcula el costo de tu envío",
      link: "#"
    },
    {
      icon: <FiClock />,
      title: "Programar",
      description: "Programa una recolección",
      link: "#"
    },
    {
      icon: <FiMapPin />,
      title: "Ubicaciones",
      description: "Encuentra centros FedEx",
      link: "#"
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="group p-6 border border-gray-200 rounded-lg hover:border-purple-800 transition-colors"
            >
              <div className="text-purple-800 text-2xl mb-4 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="font-bold mb-2">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}