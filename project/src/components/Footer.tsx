import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube, FiRss } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Nuestra Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Acerca de FedEx</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Carreras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Inversionistas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sustentabilidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog FedEx</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FedEx Express</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FedEx Ground</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Envíos Internacionales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Servicios de Carga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Servicios Especiales</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Facturación</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Reclamaciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Reporte de Fraudes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Pequeñas Empresas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Guía de Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Herramientas de Envío</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Desarrolladores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Suministros de Envío</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FedEx Rewards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Programa PyME</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Afiliados</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Descuentos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Conectar</h3>
            <div className="grid grid-cols-3 gap-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiYoutube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiRss className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Aplicación FedEx</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/app-store.png" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <img src="/google-play.png" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-400 text-sm">
              <p>© 2024 FedEx. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm justify-end">
              <a href="#" className="text-gray-400 hover:text-white">Términos de Uso</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white">Protección de Datos</a>
              <a href="#" className="text-gray-400 hover:text-white">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}