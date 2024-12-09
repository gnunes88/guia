import { NeighborhoodData } from '@/types/neighborhood';

export async function getNeighborhoodData(slug: string): Promise<NeighborhoodData | null> {
  try {
    // This will be replaced with actual API call
    const mockData: NeighborhoodData = {
      id: '1',
      name: 'Moema',
      slug: 'moema',
      description: 'Um dos bairros mais queridos de São Paulo',
      overview: {
        population: 25000,
        medianIncome: 75000,
        medianHomePrice: 450000,
        crimeRate: 'Low',
        walkScore: 85,
      },
      highlights: [
        'Localização privilegiada',
        'Excelente infraestrutura',
        'Variedade gastronômica',
      ],
      amenities: {
        restaurants: [
          {
            type: 'restaurant',
            name: 'La Nonna Di Lucca',
            address: 'Av. Juriti, 1000',
            rating: 4.5,
            description: 'Culinária italiana tradicional',
          },
        ],
        schools: [
          {
            type: 'school',
            name: 'Colégio Augusto Laranja',
            address: 'Av. Moema, 500',
            rating: 4.8,
            description: 'Ensino fundamental e médio',
          },
        ],
        parks: [
          {
            type: 'park',
            name: 'Parque Ibirapuera',
            address: 'Av. Pedro Álvares Cabral',
            description: 'Maior parque urbano de São Paulo',
          },
        ],
        shopping: [
          {
            type: 'shopping',
            name: 'Shopping Ibirapuera',
            address: 'Av. Ibirapuera, 3103',
            description: 'Principal centro comercial da região',
          },
        ],
        transportation: [
          {
            type: 'transportation',
            name: 'Estação Moema',
            address: 'Av. Ibirapuera',
            description: 'Linha 5-Lilás do Metrô',
          },
        ],
      },
      images: {
        main: 'https://images.unsplash.com/photo-1590090208734-2c532aa66d7c',
        gallery: [
          'https://images.unsplash.com/photo-1580130775562-0ef92da028de',
          'https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f',
          'https://images.unsplash.com/photo-1598977123118-4e20ea58df57',
          'https://images.unsplash.com/photo-1598977123118-4e20ea58df57',
        ],
      },
    };

    return slug === mockData.slug ? mockData : null;
  } catch (error) {
    console.error('Error fetching neighborhood data:', error);
    return null;
  }
}