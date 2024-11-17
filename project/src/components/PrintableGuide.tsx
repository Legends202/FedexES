import React from 'react';
import { FiPackage, FiMapPin, FiPhone } from 'react-icons/fi';

interface PrintableGuideProps {
  guide: {
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
  };
}

export default function PrintableGuide({ guide }: PrintableGuideProps) {
  return (
    <div className="p-8 bg-white">
      {/* Cabecera */}
      <div className="border-b-2 border-purple-800 pb-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-purple-800">FedEx</div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Fecha de emisión:</div>
            <div>{new Date(guide.date).toLocaleDateString()}</div>
          </div>
        </div>
      </div>

      {/* Número de rastreo y código de barras */}
      <div className="mb-8">
        <div className="text-center">
          <div className="text-sm text-gray-600">Número de rastreo</div>
          <div className="text-2xl font-bold">{guide.trackingNumber}</div>
          <div className="mt-2">
            <div className="h-16 bg-gray-800 mx-auto w-64"></div>
          </div>
        </div>
      </div>

      {/* Información principal */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Remitente */}
        <div className="border p-4 rounded">
          <div className="flex items-center mb-4">
            <FiMapPin className="text-purple-800 mr-2" />
            <h3 className="font-bold">REMITENTE</h3>
          </div>
          <div className="space-y-2">
            <p className="font-bold">{guide.sender.name}</p>
            <p>{guide.sender.address}</p>
            <p>{guide.sender.city}</p>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <p>{guide.sender.phone}</p>
            </div>
          </div>
        </div>

        {/* Destinatario */}
        <div className="border p-4 rounded">
          <div className="flex items-center mb-4">
            <FiMapPin className="text-purple-800 mr-2" />
            <h3 className="font-bold">DESTINATARIO</h3>
          </div>
          <div className="space-y-2">
            <p className="font-bold">{guide.recipient.name}</p>
            <p>{guide.recipient.address}</p>
            <p>{guide.recipient.city}</p>
            <div className="flex items-center">
              <FiPhone className="mr-2" />
              <p>{guide.recipient.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detalles del paquete */}
      <div className="border p-4 rounded mb-8">
        <div className="flex items-center mb-4">
          <FiPackage className="text-purple-800 mr-2" />
          <h3 className="font-bold">DETALLES DEL ENVÍO</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600">Peso</p>
            <p className="font-bold">{guide.packageDetails.weight} kg</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Dimensiones</p>
            <p className="font-bold">{guide.packageDetails.dimensions}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Servicio</p>
            <p className="font-bold">{guide.packageDetails.service}</p>
          </div>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center text-sm text-gray-600 mt-8">
        <p>Este documento es una guía de envío oficial de FedEx</p>
        <p>Para rastrear su envío, visite www.fedex.com</p>
      </div>
    </div>
  );
}