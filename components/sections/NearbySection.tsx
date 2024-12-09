'use client';

import { NearbyNeighborhoods } from '@/components/neighborhood/nearby';

export function NearbySection() {
  return (
    <section id="bairros-proximos" className="pt-20">
      <h2 className="text-3xl font-bold mb-2">Bairros próximos</h2>
      <div className="h-px bg-[#AFAFAF] mb-8" />
      <p className="text-gray-600 mb-8">
        Explore também os bairros vizinhos a Moema e descubra ainda mais opções de lazer, cultura e serviços. Cada região ao redor oferece sua própria identidade e charme, com atrações que complementam o que Moema já tem de melhor.
      </p>
      <NearbyNeighborhoods />
    </section>
  );
}