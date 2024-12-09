'use client';

import { Park } from '@mui/icons-material';

interface LeisureLocation {
  name: string;
  distance: string;
}

const leisureLocations: LeisureLocation[] = [
  { name: 'Parque de Ibirapuera', distance: '1 Km' },
  { name: 'Shopping Ibirapuera', distance: 'Na própria avenida' },
  { name: 'Bourbon Street Music Club', distance: '1,5 Km' },
  { name: 'Livraria da Vila', distance: '500 m' },
  { name: 'Feira de arte de Moema', distance: '500 m' },
  { name: 'Parque das bicicletas', distance: '200 m' },
];

export function LeisureSection() {
  return (
    <section id="lazer" className="pt-20">
      <h2 className="text-3xl font-bold mb-2">Lazer</h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600">
        Moema é um prato cheio para o lazer. O Parque Ibirapuera, a poucos passos do bairro, oferece grandes áreas verdes para atividades ao ar livre, com trilhas para caminhadas, espaços para piqueniques e pistas de bicicleta. Dentro do parque, o visitante encontra também museus como o Museu de Arte Moderna (MAM) e o Museu Afro Brasil, que apresentam exposições para todos os gostos.
      </p>
      <p className="text-gray-600 mt-4 mb-8">
        As feiras de rua também fazem parte do cotidiano do bairro. A Feira de Moema, que acontece aos domingos, é conhecida pelos pastéis frescos, frutas e artesanatos locais. É uma excelente opção para quem quer encontrar os amigos, fazer compras ou apenas experimentar um pouco do clima do bairro.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {leisureLocations.map((location) => (
          <div key={location.name} className="flex items-center gap-2">
            <Park className="text-[#247157]" />
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