'use client';

import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Navigation } from '@/components/neighborhood/Navigation';
import { AboutSection } from '@/components/sections/AboutSection';
import { HistorySection } from '@/components/sections/HistorySection';
import { LeisureSection } from '@/components/sections/LeisureSection';
import { GastronomySection } from '@/components/sections/GastronomySection';
import { AccessibilitySection } from '@/components/sections/AccessibilitySection';
import { SecuritySection } from '@/components/sections/SecuritySection';
import { InfrastructureSection } from '@/components/sections/InfrastructureSection';
import { NearbySection } from '@/components/sections/NearbySection';
import { Header } from '@/components/neighborhood/Header';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Header />
      </div>
      <Navigation />
      <div className="container mx-auto px-4">
        <AboutSection />
        <HistorySection />
        <LeisureSection />
        <GastronomySection />
        <AccessibilitySection />
        <SecuritySection />
        <InfrastructureSection />
        <NearbySection />
      </div>
      <Footer />
    </main>
  );
}