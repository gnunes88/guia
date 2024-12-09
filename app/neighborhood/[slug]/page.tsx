import { notFound } from 'next/navigation';
import { getNeighborhoodData } from '@/lib/neighborhood';
import { Header } from '@/components/neighborhood/Header';
import { Overview } from '@/components/neighborhood/Overview';
import { Amenities } from '@/components/neighborhood/Amenities';
import { Gallery } from '@/components/neighborhood/Gallery';
import type { NeighborhoodPageProps } from '@/types/neighborhood';

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const neighborhood = await getNeighborhoodData(params.slug);

  if (!neighborhood) {
    notFound();
  }

  return (
    <main>
      <Header neighborhood={neighborhood} />
      <Overview overview={neighborhood.overview} />
      <Amenities amenities={neighborhood.amenities} />
      <Gallery images={neighborhood.images.gallery} />
    </main>
  );
}