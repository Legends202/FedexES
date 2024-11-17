import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ShippingGuide from './ShippingGuide';

interface TrackingInfo {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  history: {
    date: string;
    status: string;
    location: string;
  }[];
}

interface ShippingGuideData {
  id: string;
  trackingNumber: string;
  sender: {
    name: string;
    address: string;
    city: string;
    phone: string;
  };
  recipient: {
    name: string;
    address: string;
    city: string;
    phone: string;
  };
  packageDetails: {
    weight: string;
    dimensions: string;
    service: string;
  };
  date: string;
}

const MOCK_TRACKING: TrackingInfo = {
  trackingNumber: '1234567891',
  status: 'En tránsito',
  origin: 'Ciudad de México',
  destination: 'Guadalajara',
  estimatedDelivery: '2024-01-25',
  history: [
    {
      date: '2024-01-22 08:00',
      status: 'Paquete recibido',
      location: 'Ciudad de México'
    },
    {
      date: '2024-01-23 10:30',
      status: 'En tránsito',
      location: 'Ciudad de México'
    },
    {
      date: '2024-01-24 15:45',
      status: 'En centro de distribución',
      location: 'Querétaro'
    }
  ]
};

export default function TrackingSection() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<TrackingInfo | null>(null);
  const [userGuide, setUserGuide] = useState<ShippingGuideData | null>(null);
  const [error, setError] = useState('');
  const { isAuthenticated } = useAuth();
  const [savedGuides, setSavedGuides] = useState<ShippingGuideData[]>([]);

  useEffect(() => {
    const guides = localStorage.getItem('fedexGuides');
    if (guides) {
      setSavedGuides(JSON.parse(guides));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTrackingResult(null);
    setUserGuide(null);
    
    // Check for predefined tracking number
    if (trackingNumber === MOCK_TRACKING.trackingNumber) {
      setTrackingResult(MOCK_TRACKING);
      return;
    }

    // Check for user-created guides
    const foundGuide = savedGuides.find(guide => guide.trackingNumber === trackingNumber);
    if (foundGuide) {
      setUserGuide(foundGuide);
      // Create tracking info from user guide
      setTrackingResult({
        trackingNumber: foundGuide.trackingNumber,
        status: 'En tránsito',
        origin: foundGuide.sender.city,
        destination: foundGuide.recipient.city,
        estimatedDelivery: new Date(new Date(foundGuide.date).getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        history: [
          {
            date: new Date(foundGuide.date).toLocaleString(),
            status: 'Paquete recibido',
            location: foundGuide.sender.city
          },
          {
            date: new Date(new Date(foundGuide.date).getTime() + 24 * 60 * 60 * 1000).toLocaleString(),
            status: 'En tránsito',
            location: foundGuide.sender.city
          }
        ]
      });
      return;
    }

    setError('No se encontró información para este número de rastreo');
  };

  return (
    <div className="bg-gradient-to-r from-purple-800 via-purple-700 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Rastrear mi envío
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Ingrese su número de rastreo"
                className="flex-1 p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition-colors font-semibold"
              >
                Rastrear
              </button>
            </div>
          </form>

          {error && (
            <div className="text-red-500 text-center p-4 bg-red-50 rounded">
              {error}
            </div>
          )}

          {trackingResult && (
            <div className="mt-8">
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">
                  Estado del envío: {trackingResult.status}
                </h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                  <div>
                    <p><span className="font-semibold">Origen:</span> {trackingResult.origin}</p>
                    <p><span className="font-semibold">Destino:</span> {trackingResult.destination}</p>
                  </div>
                  <div>
                    <p><span className="font-semibold">Número de rastreo:</span> {trackingResult.trackingNumber}</p>
                    <p><span className="font-semibold">Entrega estimada:</span> {trackingResult.estimatedDelivery}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-800">Historial de envío</h3>
                {trackingResult.history.map((event, index) => (
                  <div key={index} className="border-l-4 border-purple-800 pl-4 py-2">
                    <p className="font-semibold">{event.status}</p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                ))}
              </div>

              {userGuide && (
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Detalles del envío</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-2">Remitente</h4>
                      <p>{userGuide.sender.name}</p>
                      <p>{userGuide.sender.address}</p>
                      <p>{userGuide.sender.city}</p>
                      <p>{userGuide.sender.phone}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Destinatario</h4>
                      <p>{userGuide.recipient.name}</p>
                      <p>{userGuide.recipient.address}</p>
                      <p>{userGuide.recipient.city}</p>
                      <p>{userGuide.recipient.phone}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Detalles del paquete</h4>
                    <p>Peso: {userGuide.packageDetails.weight}</p>
                    <p>Dimensiones: {userGuide.packageDetails.dimensions}</p>
                    <p>Servicio: {userGuide.packageDetails.service}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isAuthenticated && <ShippingGuide />}
    </div>
  );
}