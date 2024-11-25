import React, { useState } from 'react'
import { ArrowUpDown, Check } from 'lucide-react'

const neighborhoods = [
  { name: 'Moema', price: 550000, safety: 5, schools: 5, greenSpaces: 4, amenities: 5 },
  { name: 'Vila Nova Conceição', price: 600000, safety: 5, schools: 5, greenSpaces: 4, amenities: 4 },
  { name: 'Vila Olímpia', price: 500000, safety: 4, schools: 4, greenSpaces: 3, amenities: 5 },
  { name: 'Itaim Bibi', price: 520000, safety: 4, schools: 4, greenSpaces: 3, amenities: 5 },
  { name: 'Brooklin', price: 480000, safety: 4, schools: 4, greenSpaces: 4, amenities: 4 },
]

const ComparisonTool: React.FC = () => {
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [filters, setFilters] = useState({
    safety: 0,
    schools: 0,
    greenSpaces: 0,
    amenities: 0,
  })

  const handleNeighborhoodToggle = (name: string) => {
    setSelectedNeighborhoods(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name].slice(0, 3)
    )
  }

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'price') {
      setMaxPrice(Number(value))
    } else {
      setFilters(prev => ({ ...prev, [name]: Number(value) }))
    }
  }

  const filteredNeighborhoods = neighborhoods.filter(n => 
    n.price <= maxPrice &&
    n.safety >= filters.safety &&
    n.schools >= filters.schools &&
    n.greenSpaces >= filters.greenSpaces &&
    n.amenities >= filters.amenities
  )

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Comparação de Bairros</h2>
        <p className="section-subtitle">
          Compare Moema com outros bairros próximos para encontrar o lugar perfeito para você morar.
        </p>
        <div className="mb-8 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Filtros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Faixa de Preço</label>
              <input
                type="range"
                name="price"
                min="0"
                max="1000000"
                step="50000"
                value={maxPrice}
                onChange={handleFilterChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>R$ 0</span>
                <span>R$ {maxPrice.toLocaleString()}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Segurança Mínima</label>
              <input
                type="range"
                name="safety"
                min="0"
                max="5"
                step="1"
                value={filters.safety}
                onChange={handleFilterChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>5</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qualidade das Escolas</label>
              <input
                type="range"
                name="schools"
                min="0"
                max="5"
                step="1"
                value={filters.schools}
                onChange={handleFilterChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>5</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Áreas Verdes</label>
              <input
                type="range"
                name="greenSpaces"
                min="0"
                max="5"
                step="1"
                value={filters.greenSpaces}
                onChange={handleFilterChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>5</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Comodidades</label>
              <input
                type="range"
                name="amenities"
                min="0"
                max="5"
                step="1"
                value={filters.amenities}
                onChange={handleFilterChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {filteredNeighborhoods.map(neighborhood => (
            <button
              key={neighborhood.name}
              onClick={() => handleNeighborhoodToggle(neighborhood.name)}
              className={`px-4 py-2 rounded-full transition duration-300 ease-in-out ${
                selectedNeighborhoods.includes(neighborhood.name)
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {neighborhood.name}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Bairro</th>
                <th className="p-3 text-left">Preço Médio</th>
                <th className="p-3 text-left">Segurança</th>
                <th className="p-3 text-left">Escolas</th>
                <th className="p-3 text-left">Áreas Verdes</th>
                <th className="p-3 text-left">Comodidades</th>
              </tr>
            </thead>
            <tbody>
              {neighborhoods
                .filter(n => selectedNeighborhoods.includes(n.name))
                .map(neighborhood => (
                  <tr key={neighborhood.name} className="border-b">
                    <td className="p-3 font-medium">{neighborhood.name}</td>
                    <td className="p-3">R$ {neighborhood.price.toLocaleString()}</td>
                    <td className="p-3">{renderRating(neighborhood.safety)}</td>
                    <td className="p-3">{renderRating(neighborhood.schools)}</td>
                    <td className="p-3">{renderRating(neighborhood.greenSpaces)}</td>
                    <td className="p-3">{renderRating(neighborhood.amenities)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {selectedNeighborhoods.length === 0 && (
          <p className="text-center mt-4 text-gray-600">Selecione bairros para comparar</p>
        )}
      </div>
    </section>
  )
}

const renderRating = (rating: number) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default ComparisonTool