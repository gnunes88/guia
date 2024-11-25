import React from 'react'
import { MapPin, ArrowRight } from 'lucide-react'

const nearbyNeighborhoods = [
  { name: 'Vila Nova Conceição', image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', description: 'Bairro elegante com casas de alto padrão e ótimos restaurantes.' },
  { name: 'Vila Olímpia', image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80', description: 'Centro empresarial moderno com vida noturna agitada.' },
  { name: 'Itaim Bibi', image: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', description: 'Mistura de residências e comércio com excelente infraestrutura.' },
]

const NearbyNeighborhoods: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Bairros Próximos de Moema</h2>
        <p className="section-subtitle">
          Conheça os bairros vizinhos de Moema e descubra outras opções incríveis para morar na região.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearbyNeighborhoods.map((neighborhood, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <img src={neighborhood.image} alt={neighborhood.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{neighborhood.name}</h3>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                <a href="#" className="text-primary hover:text-primary-dark font-semibold flex items-center">
                  Explorar {neighborhood.name}
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NearbyNeighborhoods