import React, { useState } from 'react'
import { MapPin } from 'lucide-react'

const categories = [
  'restaurantes', 'mercados', 'vida noturna', 'cafés', 'compras', 
  'hospitais', 'academias', 'farmácias', 'artes e entretenimento'
]

const InteractiveMap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('restaurantes')

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-gray-100">
        <h3 className="text-xl font-semibold mb-2">Explore o Bairro</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="h-96 bg-gray-300 relative">
        {/* Placeholder for the actual map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-600">Mapa Interativo (Placeholder)</p>
        </div>
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow">
          <MapPin className="text-red-500" size={24} />
          <span className="ml-2">{selectedCategory}</span>
        </div>
      </div>
    </div>
  )
}

export default InteractiveMap