import React from 'react'
import { Building, ArrowRight } from 'lucide-react'

const condominiums = [
  { name: "Torres do Ibirapuera", units: 120, amenities: ["Piscina", "Academia", "Jardim no Terraço"] },
  { name: "Residencial Moema Park", units: 85, amenities: ["Quadra de Tênis", "Spa", "Concierge"] },
  { name: "Condomínio Alameda Maracatins", units: 150, amenities: ["Playground", "Área para Pets", "Espaço de Coworking"] }
]

const Condominiums: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Condomínios em Moema</h2>
        <p className="section-subtitle">
          Conheça os condomínios mais exclusivos de Moema, com amenidades de alto padrão e localização privilegiada.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {condominiums.map((condo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Building className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-semibold">{condo.name}</h3>
              </div>
              <p className="mb-2 text-gray-700">{condo.units} Unidades Disponíveis</p>
              <ul className="mb-4 text-gray-600">
                {condo.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight className="text-primary mr-2" size={16} />
                    {amenity}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-primary hover:text-primary-dark font-semibold flex items-center">
                Ver Detalhes
                <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Condominiums