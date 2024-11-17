import { useState } from 'react';
import { FiSearch, FiMenu, FiUser, FiMapPin, FiPhone, FiLogOut, FiGlobe, FiHelpCircle } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { isAuthenticated, username, logout } = useAuth();

  const languages = [
    { code: 'es-MX', name: 'México - Español' },
    { code: 'en-US', name: 'United States - English' },
    { code: 'es-CO', name: 'Colombia - Español' },
    { code: 'pt-BR', name: 'Brasil - Português' }
  ];

  return (
    <>
      <div className="bg-purple-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center hover:text-gray-200">
              <FiPhone className="mr-2" />
              01.800.463.3339
            </a>
            <a href="#" className="flex items-center hover:text-gray-200">
              <FiMapPin className="mr-2" />
              Ubicaciones
            </a>
            <a href="#" className="flex items-center hover:text-gray-200">
              <FiHelpCircle className="mr-2" />
              Ayuda
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="flex items-center hover:text-gray-200"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              >
                <FiGlobe className="mr-2" />
                México-Español
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-purple-50"
                      onClick={() => setShowLanguageMenu(false)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span>Bienvenido, {username}</span>
                <button 
                  onClick={logout}
                  className="flex items-center hover:text-gray-200"
                >
                  <FiLogOut className="mr-2" />
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowLoginModal(true)}
                className="hover:text-gray-200"
              >
                Iniciar sesión
              </button>
            )}
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-purple-800 text-2xl font-bold">FedEx</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-purple-700">Enviar</a>
                <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Crear un envío</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Programar una recolección</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Calcular tiempo y costo</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-purple-700">Rastrear</a>
                <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Rastrear por número</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Rastreo avanzado</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Administrar envíos</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-purple-700">Servicios de envío</a>
                <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">FedEx Express</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">FedEx Ground</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Servicios internacionales</a>
                </div>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-purple-700">Soporte</a>
                <div className="absolute hidden group-hover:block w-64 bg-white shadow-lg rounded-md mt-2 z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Centro de ayuda</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Contacto</a>
                  <a href="#" className="block px-4 py-2 hover:bg-purple-50">Reclamaciones</a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Buscar"
              >
                <FiSearch className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                className="p-2 rounded-full hover:bg-gray-100"
                aria-label="Cuenta de usuario"
              >
                <FiUser className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                className="md:hidden p-2 rounded-full hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Alternar menú"
                aria-expanded={isOpen}
              >
                <FiMenu className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Enviar</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Rastrear</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Servicios de envío</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Soporte</a>
            </div>
          </div>
        )}
      </nav>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
}