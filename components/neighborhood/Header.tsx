'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  return (
    <div className="relative h-[80vh] w-full">
      <Image
        src="https://ynkkkxhqzvqzzvikxteu.supabase.co/storage/v1/object/public/neighborhood_guide/imagem-bairro-padrao.jpg?t=2024-12-09T19%3A40%3A13.792Z"
        alt="Moema neighborhood"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-6xl font-bold mb-8 text-center">Moema</h1>
        <Button
          size="lg"
          className="bg-[#EB194B] hover:bg-[#EB194B]/90 text-white px-8 py-6 text-lg"
        >
          Ver imóveis
        </Button>
      </div>
    </div>
  );
}