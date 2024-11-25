import React from 'react'
import { MapPin, Coffee, ShoppingBag, Utensils, Landmark } from 'lucide-react'

const pointsOfInterest = [
  { name: 'Parque do Ibirapuera', distance: 1.5, icon: Landmark },
  { name: 'Shopping Ibirapuera', distance: 0.8, icon: ShoppingBag },
  { name: 'Restaurante Fasano', distance: 1.2, icon: Utensils },
  { name: 'Café Suplicy', distance: 0.3, icon: Coffee },
]

const PointsOfInterest: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pontos de Interesse no Bairro</h2>
        <p className="section-subtitle">
          Descubra os principais locais e atrações que fazem de Moema um bairro tão especial e conveniente para se viver.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pointsOfInterest.map((poi, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-center mb-4">
                <poi.icon className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-semibold">{poi.name}</h3>
              </div>
              <p className="text-gray-600 flex items-center">
                <MapPin className="mr-2" size={16} />
                {poi.distance} km da Av. Ibirapuera
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PointsOfInterest