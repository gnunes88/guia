import React from 'react'
import { Video, ChevronRight } from 'lucide-react'

const VirtualTour: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experimente o Bairro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Tour Virtual do Bairro"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Faça um Tour Virtual</h3>
            <p className="mb-6 text-gray-700">
              Mergulhe em nosso bairro vibrante sem sair de casa. Nosso tour virtual mostra o melhor que nossa comunidade tem a oferecer, desde ruas arborizadas até pontos locais populares.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <ChevronRight className="text-green-500 mr-2" size={20} />
                <span>Explore parques locais e áreas verdes</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-green-500 mr-2" size={20} />
                <span>Visite lojas e restaurantes próximos</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="text-green-500 mr-2" size={20} />
                <span>Veja instalações e comodidades da comunidade</span>
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <Video className="mr-2" size={20} />
              Iniciar Tour Virtual
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualTour