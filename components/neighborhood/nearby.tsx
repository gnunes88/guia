'use client';

import Image from 'next/image';
import { LocationOn, KeyboardArrowRight } from '@mui/icons-material';

interface NearbyNeighborhood {
  name: string;
  image: string;
  distance: string;
  slug: string;
}

const nearbyNeighborhoods: NearbyNeighborhood[] = [
  {
    name: 'Vila Mariana',
    image: 'https://images.unsplash.com/photo-1580130775562-0ef92da028de',
    distance: '1,6 km de distância',
    slug: 'vila-mariana',
  },
  {
    name: 'Itaim Bibi',
    image: 'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f',
    distance: '1,5 km de distância',
    slug: 'itaim-bibi',
  },
  {
    name: 'Campo Belo',
    image: 'https://images.unsplash.com/photo-1598977123118-4e20ea58df57',
    distance: '4,3 km de distância',
    slug: 'campo-belo',
  },
];

export function NearbyNeighborhoods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {nearbyNeighborhoods.map((neighborhood) => (
        <div
          key={neighborhood.slug}
          className="bg-white rounded-lg overflow-hidden shadow-md"
        >
          <div className="relative h-48">
            <Image
              src={neighborhood.image}
              alt={neighborhood.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{neighborhood.name}</h3>
            <p className="text-gray-600 mb-4 flex items-center gap-1">
              <LocationOn className="text-[#247157] w-4 h-4" />
              {neighborhood.distance}
            </p>
            <button className="flex items-center text-[#EB194B] hover:text-[#EB194B]/90 font-medium">
              Explorar bairro
              <KeyboardArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}