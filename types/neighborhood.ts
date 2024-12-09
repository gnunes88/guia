export interface Amenity {
  type: string;
  name: string;
  address: string;
  rating?: number;
  description?: string;
}

export interface Overview {
  population: number;
  medianIncome: number;
  medianHomePrice: number;
  crimeRate: string;
  walkScore: number;
}

export interface Images {
  main: string;
  gallery: string[];
}

export interface NeighborhoodAmenities {
  restaurants: Amenity[];
  schools: Amenity[];
  parks: Amenity[];
  shopping: Amenity[];
  transportation: Amenity[];
}

export interface NeighborhoodData {
  id: string;
  name: string;
  slug: string;
  description: string;
  overview: Overview;
  highlights: string[];
  amenities: NeighborhoodAmenities;
  images: Images;
}

export interface NeighborhoodPageProps {
  params: {
    slug: string;
  };
}