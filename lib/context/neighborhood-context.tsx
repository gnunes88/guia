'use client';

import { createContext, useContext } from 'react';
import type { NeighborhoodData } from '@/types/neighborhood';

const NeighborhoodContext = createContext<NeighborhoodData | null>(null);

export function useNeighborhood() {
  const context = useContext(NeighborhoodContext);
  if (!context) {
    throw new Error('useNeighborhood must be used within a NeighborhoodProvider');
  }
  return context;
}

export function NeighborhoodProvider({
  neighborhood,
  children,
}: {
  neighborhood: NeighborhoodData;
  children: React.ReactNode;
}) {
  return (
    <NeighborhoodContext.Provider value={neighborhood}>
      {children}
    </NeighborhoodContext.Provider>
  );
}