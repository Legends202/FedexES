import { useState, useEffect } from 'react';
import { FiPrinter, FiDownload, FiSave } from 'react-icons/fi';
import PrintableGuide from './PrintableGuide';

interface ShippingGuide {
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

export default function ShippingGuide() {
  const [guides, setGuides] = useState<ShippingGuide[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<ShippingGuide | null>(null);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [formData, setFormData] = useState<Omit<ShippingGuide, 'id' | 'trackingNumber' | 'date'>>({
    sender: {
      name: '',
      address: '',
      city: '',
      phone: '',
    },
    recipient: {
      name: '',
      address: '',
      city: '',
      phone: '',
    },
    packageDetails: {
      weight: '',
      dimensions: '',
      service: 'FedEx Express',
    },
  });

  useEffect(() => {
    const savedGuides = localStorage.getItem('fedexGuides');
    if (savedGuides) {
      setGuides(JSON.parse(savedGuides));
    }
  }, []);

  const generateTrackingNumber = () => {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGuide: ShippingGuide = {
      id: Date.now().toString(),
      trackingNumber: generateTrackingNumber(),
      ...formData,
      date: new Date().toISOString(),
    };

    const updatedGuides = [...guides, newGuide];
    setGuides(updatedGuides);
    localStorage.setItem('fedexGuides', JSON.stringify(updatedGuides));

    setFormData({
      sender: { name: '', address: '', city: '', phone: '' },
      recipient: { name: '', address: '', city: '', phone: '' },
      packageDetails: { weight: '', dimensions: '', service: 'FedEx Express' },
    });
  };

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handlePrint = (guide: ShippingGuide) => {
    setSelectedGuide(guide);
    setShowPrintPreview(true);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleDownload = (guide: ShippingGuide) => {
    const guideData = JSON.stringify(guide, null, 2);
    const blob = new Blob([guideData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `guia-fedex-${guide.trackingNumber}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {showPrintPreview && selectedGuide ? (
        <div className="print-only">
          <PrintableGuide guide={selectedGuide} />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4 py-8 no-print">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">Generar Nueva Guía</h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Remitente */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Datos del Remitente</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="p-2 border rounded"
                  value={formData.sender.name}
                  onChange={(e) => handleInputChange('sender', 'name', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="p-2 border rounded"
                  value={formData.sender.address}
                  onChange={(e) => handleInputChange('sender', 'address', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  className="p-2 border rounded"
                  value={formData.sender.city}
                  onChange={(e) => handleInputChange('sender', 'city', e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="p-2 border rounded"
                  value={formData.sender.phone}
                  onChange={(e) => handleInputChange('sender', 'phone', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Destinatario */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Datos del Destinatario</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="p-2 border rounded"
                  value={formData.recipient.name}
                  onChange={(e) => handleInputChange('recipient', 'name', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="p-2 border rounded"
                  value={formData.recipient.address}
                  onChange={(e) => handleInputChange('recipient', 'address', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Ciudad"
                  className="p-2 border rounded"
                  value={formData.recipient.city}
                  onChange={(e) => handleInputChange('recipient', 'city', e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="p-2 border rounded"
                  value={formData.recipient.phone}
                  onChange={(e) => handleInputChange('recipient', 'phone', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Detalles del Paquete */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Detalles del Paquete</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Peso (kg)"
                  className="p-2 border rounded"
                  value={formData.packageDetails.weight}
                  onChange={(e) => handleInputChange('packageDetails', 'weight', e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Dimensiones (cm)"
                  className="p-2 border rounded"
                  value={formData.packageDetails.dimensions}
                  onChange={(e) => handleInputChange('packageDetails', 'dimensions', e.target.value)}
                  required
                />
                <select
                  className="p-2 border rounded"
                  value={formData.packageDetails.service}
                  onChange={(e) => handleInputChange('packageDetails', 'service', e.target.value)}
                  required
                >
                  <option value="FedEx Express">FedEx Express</option>
                  <option value="FedEx Ground">FedEx Ground</option>
                  <option value="FedEx Priority">FedEx Priority</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-800 text-white py-3 rounded-lg hover:bg-purple-900 transition-colors"
            >
              Generar Guía
            </button>
          </form>

          {/* Lista de Guías Generadas */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-purple-800 mb-6">Guías Generadas</h3>
            <div className="space-y-4">
              {guides.map((guide) => (
                <div key={guide.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-lg font-semibold text-purple-800">
                        Guía #{guide.trackingNumber}
                      </p>
                      <p className="text-sm text-gray-600">
                        {new Date(guide.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handlePrint(guide)}
                        className="p-2 text-purple-800 hover:bg-purple-50 rounded"
                        title="Imprimir"
                      >
                        <FiPrinter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDownload(guide)}
                        className="p-2 text-purple-800 hover:bg-purple-50 rounded"
                        title="Descargar"
                      >
                        <FiDownload className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">Remitente:</p>
                      <p>{guide.sender.name}</p>
                      <p>{guide.sender.address}</p>
                      <p>{guide.sender.city}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Destinatario:</p>
                      <p>{guide.recipient.name}</p>
                      <p>{guide.recipient.address}</p>
                      <p>{guide.recipient.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          .no-print {
            display: none;
          }
          .print-only {
            display: block;
          }
        }
        @media screen {
          .print-only {
            display: none;
          }
        }
      `}</style>
    </>
  );
}