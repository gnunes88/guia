'use client';

import { LocalHospital, LocalPolice } from '@mui/icons-material';

interface SecurityLocation {
  name: string;
  distance: string;
  type: 'hospital' | 'police';
}

const securityLocations: SecurityLocation[] = [
  { name: 'Hospital Alvorada Moema', distance: '1 Km', type: 'hospital' },
  { name: '94ª Delegacia de Polícia', distance: '600 m', type: 'police' },
  { name: 'Hospital Moriah', distance: '500 m', type: 'hospital' },
  { name: '12º Batalhão da Polícia Militar', distance: '400 m', type: 'police' },
  { name: 'Hospital Santa Paula', distance: '1,5 Km', type: 'hospital' },
  { name: 'Guarda Civil Metropolitana', distance: '200 m', type: 'police' },
];

export function SecuritySection() {
  return (
    <section id="seguranca" className="pt-20">
      <h2 className="text-3xl font-bold mb-2">
        Segurança e qualidade de vida
      </h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600">
        Moema é um dos bairros mais seguros de São Paulo, com monitoramento frequente e um bom sistema de vigilância em áreas públicas e residenciais. Esse aspecto é valorizado pelos moradores, que encontram aqui um espaço onde é possível viver com mais tranquilidade.
      </p>
      <p className="text-gray-600 mt-4 mb-8">
        A infraestrutura de saúde também é bem desenvolvida. O bairro conta com hospitais como o Hospital Alvorada e o Hospital São Luiz, que são referências na cidade. Essa proximidade com serviços médicos é um benefício importante para os moradores, que têm fácil acesso a clínicas e hospitais de qualidade.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {securityLocations.map((location) => (
          <div key={location.name} className="flex items-center gap-2">
            {location.type === 'hospital' ? (
              <LocalHospital className="text-[#247157]" />
            ) : (
              <LocalPolice className="text-[#247157]" />
            )}
            <span className="font-medium">{location.name}</span>
            <span className="text-gray-600">- {location.distance}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-600">
        <span className="text-[#EB194B]">*</span>
        <strong>Atenção:</strong> As distâncias são calculadas a partir da rua principal do bairro, e podem variar dependendo do ponto específico considerado.
      </p>
    </section>
  );
}