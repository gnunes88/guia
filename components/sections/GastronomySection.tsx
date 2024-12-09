'use client';

import { Restaurant } from '@mui/icons-material';

interface Restaurant {
  name: string;
  distance: string;
}

const restaurants: Restaurant[] = [
  { name: 'La Nonna Di Lucca', distance: '300 m' },
  { name: 'Mais Burguinho', distance: '600 m' },
  { name: 'La Ventana Parrilla', distance: '500 m' },
  { name: 'Al Mare', distance: '400 m' },
  { name: 'Aoyama', distance: '400 m' },
  { name: 'Chez Vous', distance: '200 m' },
];

export function GastronomySection() {
  return (
    <section id="gastronomia" className="pt-20">
      <h2 className="text-3xl font-bold mb-2">Gastronomia</h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600">
        A diversidade gastronômica de Moema é um dos seus grandes atrativos. O bairro oferece desde restaurantes sofisticados até locais mais simples e tradicionais, garantindo opções para todos os gostos. Restaurantes como o Josephine e o La Grassa são referências de qualidade, servindo pratos da cozinha mediterrânea e italiana em ambientes acolhedores.
      </p>
      <p className="text-gray-600 mt-4">
        Se a preferência é por comida japonesa, há opções renomadas como o Kinoshita e o Sassá Sushi, que são elogiados pelo frescor e qualidade de seus sushis. Para quem busca um café da manhã completo, a Padaria Bienal e a Padoca Real oferecem pães artesanais e brunch aos finais de semana. Já os amantes de sorvetes podem contar com as gelaterias Bacio di Latte e Stuppendo.
      </p>
      <p className="text-gray-600 mt-4 mb-8">
        Para uma noite descontraída, Moema tem vários bares e cafés que são pontos de encontro para relaxar e aproveitar a noite. Muitos estabelecimentos ao redor do bairro são conhecidos por criar um ambiente acolhedor, onde os clientes podem desfrutar de momentos agradáveis com amigos e familiares.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.name} className="flex items-center gap-2">
            <Restaurant className="text-[#247157]" />
            <span className="font-medium">{restaurant.name}</span>
            <span className="text-gray-600">- {restaurant.distance}</span>
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