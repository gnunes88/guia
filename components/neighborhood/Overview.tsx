import { NeighborhoodData } from '@/types/neighborhood';
import { Building2, Users, Banknote, Shield, FootprintsIcon } from 'lucide-react';

interface OverviewProps {
  overview: NeighborhoodData['overview'];
}

export function Overview({ overview }: OverviewProps) {
  const stats = [
    {
      label: 'Population',
      value: overview.population.toLocaleString(),
      icon: Users,
    },
    {
      label: 'Median Income',
      value: `$${overview.medianIncome.toLocaleString()}`,
      icon: Banknote,
    },
    {
      label: 'Median Home Price',
      value: `$${overview.medianHomePrice.toLocaleString()}`,
      icon: Building2,
    },
    {
      label: 'Crime Rate',
      value: overview.crimeRate,
      icon: Shield,
    },
    {
      label: 'Walk Score',
      value: `${overview.walkScore}/100`,
      icon: FootprintsIcon,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Neighborhood Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-lg border border-gray-200 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}