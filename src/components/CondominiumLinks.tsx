import React from 'react'
import { Building, ArrowRight } from 'lucide-react'

const condominiums = [
  { name: "Torres do Pôr do Sol", units: 120, amenities: ["Piscina", "Academia", "Jardim no Terraço"] },
  { name: "Residências Riverside", units: 85, amenities: ["Quadra de Tênis", "Spa", "Concierge"] },
  { name: "Condomínio Vista do Parque", units: 150, amenities: ["Playground", "Área para Pets", "Espaço de Coworking"] }
]

const CondominiumLinks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Condomínios em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {condominiums.map((condo, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Building className="text-blue-500 mr-2" size={24} />
                <h3 className="text-xl font-semibold">{condo.name}</h3>
              </div>
              <p className="mb-2 text-gray-700">{condo.units} Unidades Disponíveis</p>
              <ul className="mb-4 text-gray-600">
                {condo.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight className="text-green-500 mr-2" size={16} />
                    {amenity}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
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

export default CondominiumLinks