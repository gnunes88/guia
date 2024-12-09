'use client';

import { School } from '@mui/icons-material';

interface School {
  name: string;
  distance: string;
}

const schools: School[] = [
  { name: 'Colégio Augusto Laranja', distance: '600 m' },
  { name: 'Escola Gaivota', distance: '400 m' },
  { name: 'Escola Móbile', distance: '800 m' },
  { name: 'Escola Pinguim', distance: '900 m' },
  { name: 'Colégio Catamarã', distance: '500 m' },
  { name: 'Escola Morumbi Moema', distance: '300 m' },
];

export function InfrastructureSection() {
  return (
    <section id="infraestrutura" className="pt-20">
      <h2 className="text-3xl font-bold mb-2">Infraestrutura</h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600">
        Moema é um bairro completo, que reúne charme, qualidade de vida e tudo o que se precisa para viver bem. Seja para quem já mora em São Paulo ou para quem deseja conhecer um dos bairros mais agradáveis da cidade, Moema é uma escolha certeira. Com uma ótima infraestrutura, áreas verdes, opções de lazer e uma rica cena gastronômica, é um lugar que oferece o melhor de São Paulo em um só bairro.
      </p>
      <p className="text-gray-600 mt-4 mb-8">
        Além disso, Moema se destaca pela qualidade de suas escolas, que atendem desde a educação infantil até o ensino médio, oferecendo ensino de excelência. Com colégios tradicionais e bilíngues, o bairro é uma referência em educação, sendo uma escolha ideal para famílias que buscam investir no futuro dos filhos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {schools.map((school) => (
          <div key={school.name} className="flex items-center gap-2">
            <School className="text-[#247157]" />
            <span className="font-medium">{school.name}</span>
            <span className="text-gray-600">- {school.distance}</span>
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