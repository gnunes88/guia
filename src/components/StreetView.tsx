import React from 'react'
import { Eye } from 'lucide-react'

const StreetView: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Passeie por Moema</h2>
        <p className="section-subtitle">
          Explore as ruas de Moema virtualmente e sinta a atmosfera do bairro antes mesmo de visitá-lo pessoalmente.
        </p>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1621438000000!6m8!1m7!1sCAoSLEFGMVFpcE1IWUNmZUNkRHZkMHRJWUFKbHZxdHNjRHZkRzRXWnVMWmRXTkxn!2m2!1d-23.6110797!2d-46.6669903!3f180!4f0!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center mx-auto">
            <Eye className="mr-2" size={20} />
            Explorar Mais Ruas
          </button>
        </div>
      </div>
    </section>
  )
}

export default StreetView