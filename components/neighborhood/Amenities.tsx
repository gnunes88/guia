'use client';

import { NeighborhoodData, Amenity } from '@/types/neighborhood';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Utensils,
  GraduationCap,
  Trees,
  ShoppingBag,
  Train,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AmenitiesProps {
  amenities: NeighborhoodData['amenities'];
}

const AMENITY_ICONS = {
  restaurants: Utensils,
  schools: GraduationCap,
  parks: Trees,
  shopping: ShoppingBag,
  transportation: Train,
};

function AmenityList({ items, type }: { items: Amenity[]; type: string }) {
  const Icon = AMENITY_ICONS[type as keyof typeof AMENITY_ICONS];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Card key={item.name}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon className="w-5 h-5" />
              {item.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">{item.address}</p>
            {item.rating && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span>{item.rating.toFixed(1)}</span>
              </div>
            )}
            {item.description && (
              <p className="text-sm mt-2">{item.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function Amenities({ amenities }: AmenitiesProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Local Amenities</h2>
        <Tabs defaultValue="restaurants">
          <TabsList className="mb-8">
            {Object.keys(amenities).map((type) => (
              <TabsTrigger key={type} value={type} className="capitalize">
                {type}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(amenities).map(([type, items]) => (
            <TabsContent key={type} value={type}>
              <AmenityList items={items} type={type} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}