import { FiUser, FiAlertTriangle, FiSettings, FiMapPin, FiFileText } from 'react-icons/fi';

export default function ShippingManagement() {
  const services = [
    {
      icon: <FiUser className="w-12 h-12 text-purple-800" />,
      title: "ABRIR UNA CUENTA",
      link: "#"
    },
    {
      icon: <FiAlertTriangle className="w-12 h-12 text-purple-800" />,
      title: "ALERTAS DE SERVICIO",
      link: "#"
    },
    {
      icon: <FiSettings className="w-12 h-12 text-purple-800" />,
      title: "HERRAMIENTAS EN LÍNEA",
      link: "#"
    },
    {
      icon: <FiMapPin className="w-12 h-12 text-purple-800" />,
      title: "HORARIO DE ATENCIÓN Y SERVICIOS",
      link: "#"
    },
    {
      icon: <FiFileText className="w-12 h-12 text-purple-800" />,
      title: "FEDEX® BILLING ONLINE",
      link: "#"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Administra tus envíos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="flex flex-col items-center text-center group hover:text-purple-800 transition-colors"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <span className="text-sm font-semibold">{service.title}</span>
            </a>
          ))}
        </div>

        <div className="space-y-6 text-gray-700 max-w-4xl mx-auto">
          <p className="text-center">
            FedEx no solicita, por medio de mensajes de correo electrónico o SMS no solicitados, pagos, o información personal a cambio de paquetes en tránsito o en custodia de FedEx. Tampoco solicita información por medio de llamadas, códigos de verificación enviados a través de SMS o WhatsApp.
          </p>
          
          <p className="text-center">
            Si has recibido un mensaje de correo electrónico, SMS o llamada que afirma provenir de FedEx, y esta no es una forma de comunicación autorizada o solicitada por ti, puedes denunciarlo reenviándolo a abuse@fedex.com. Así mismo, te invitamos a visitar nuestra página de Reporte de Fraudes, en donde podrás encontrar más información para prevenirlos.
          </p>
          
          <p className="text-center">
            Te informamos que los únicos canales oficiales para dar seguimiento a tus envíos de FedEx son a través de nuestra página fedex.com/mx o llamando a nuestro centro de atención al cliente, 55.5228.9904.
          </p>
        </div>
      </div>
    </div>
  );
}