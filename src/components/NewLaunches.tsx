import React from 'react'
import { Home, Bed, Bath, MapPin } from 'lucide-react'

const newLaunches = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Moema Essence',
    price: 1500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    address: 'Alameda dos Jurupis, Moema'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Moema Sky',
    price: 2800000,
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    address: 'Avenida Rouxinol, Moema'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Moema Green',
    price: 1800000,
    bedrooms: 3,
    bathrooms: 2,
    area: 130,
    address: 'Alameda dos Nhambiquaras, Moema'
  },
]

const NewLaunches: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Imóveis de Lançamento</h2>
        <p className="section-subtitle">
          Conheça os novos empreendimentos que estão chegando a Moema, oferecendo o que há de mais moderno em design e conforto.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newLaunches.map(property => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-primary text-2xl font-bold mb-2">
                  R$ {property.price.toLocaleString('pt-BR')}
                </p>
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.address}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <div className="flex items-center">
                    <Bed size={16} className="mr-1" />
                    <span>{property.bedrooms} quartos</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{property.bathrooms} banheiros</span>
                  </div>
                  <div className="flex items-center">
                    <Home size={16} className="mr-1" />
                    <span>{property.area} m²</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-100">
                <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewLaunches