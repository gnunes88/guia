'use client';

import { DirectionsBus } from '@mui/icons-material';

interface TransportLocation {
  name: string;
  distance: string;
}

const transportLocations: TransportLocation[] = [
  { name: 'Estação Moema', distance: 'Na própria avenida' },
  { name: 'Terminal de ônibus Santa Cruz', distance: '2 Km' },
  { name: 'Estação Eucaliptos', distance: 'Na própria avenida' },
  { name: 'Pontos de táxi', distance: 'Ao longo da avenida' },
  { name: 'Ciclovia', distance: 'Ao longo da avenida' },
];

export function AccessibilitySection() {
  return (
    <section id="acessibilidade" className="pt-20">
      <h2 className="text-3xl font-bold mb-2">
        Acessibilidade e mobilidade
      </h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600">
        Moema é um bairro com fácil acesso ao restante de São Paulo, graças à Linha 5-Lilás do metrô, com as estações Moema e Eucaliptos. Essa linha conecta o bairro a outras áreas estratégicas, como a Vila Mariana e a Avenida Paulista, facilitando o dia a dia de quem precisa se deslocar pela cidade.
      </p>
      <p className="text-gray-600 mt-4 mb-8">
        A mobilidade é outro ponto forte: Moema conta com várias linhas de ônibus que circulam pela Avenida Ibirapuera e principais vias, facilitando o acesso a diferentes regiões. E para quem prefere andar de bicicleta, o bairro possui ciclovias que promovem uma opção de transporte sustentável, ideal para curtas distâncias.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {transportLocations.map((location) => (
          <div key={location.name} className="flex items-center gap-2">
            <DirectionsBus className="text-[#247157]" />
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