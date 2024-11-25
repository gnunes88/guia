import React from 'react'
import { MapPin, Shield, Leaf, Building, Coffee, ChevronRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="relative h-[717px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="Moema Neighborhood" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Breadcrumb Navigation */}
        <div className="absolute top-8 left-8">
          <nav className="flex items-center text-white text-sm">
            <a href="#" className="hover:text-gray-300">Home</a>
            <ChevronRight size={16} className="mx-2" />
            <a href="#" className="hover:text-gray-300">Guia de bairros</a>
            <ChevronRight size={16} className="mx-2" />
            <a href="#" className="hover:text-gray-300">São Paulo</a>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-300">Moema</span>
          </nav>
        </div>
        
        {/* Title and CTA */}
        <div className="absolute inset-0 flex flex-col items-center pt-[96px]">
          <h1 className="text-[96px] font-bold text-white opacity-90 tracking-wider xl:text-[96px]">
            Moema
          </h1>
          <button className="bg-[#E31C58] hover:bg-[#d1174a] text-white py-4 px-8 rounded-lg text-lg font-medium transition duration-300 flex items-center justify-center w-auto">
            Ver imóveis
          </button>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-red-600">Sobre Moema</h2>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className="xl:w-2/3">
              <p className="text-lg mb-4">
                Moema é um dos bairros mais cobiçados de São Paulo, conhecido por suas ruas arborizadas e planas, que convidam a caminhadas e passeios de bicicleta. Localizado próximo ao Parque Ibirapuera, o bairro oferece uma excelente qualidade de vida, unindo tranquilidade e modernidade. Com uma ampla variedade de comércio, serviços e restaurantes, Moema é ideal para quem busca praticidade sem abrir mão de um ambiente acolhedor e seguro.
              </p>
              <p className="text-lg mb-8">
                Além disso, o bairro se destaca pela facilidade de acesso a outras regiões da cidade, com importantes vias de ligação e estações de metrô. Mesmo com sua ótima localização, Moema mantém um clima residencial e familiar, onde os moradores desfrutam de uma vida mais tranquila, mas com todas as conveniências da metrópole ao alcance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4 flex items-center">
                  <Shield className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Bairro seguro</span>
                </div>
                <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4 flex items-center">
                  <Leaf className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Arborizado</span>
                </div>
                <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4 flex items-center h-full">
                  <Building className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Construções modernas</span>
                </div>
                <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4 flex items-center h-full">
                  <Coffee className="text-red-600 mr-2" size={24} />
                  <span className="font-semibold">Muitas comodidades</span>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 space-y-4">
              <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4">
                <h3 className="text-red-600 font-semibold mb-2">
                  Mercado imobiliário
                </h3>
                <p>Valor médio de aluguel: R$ 5.000/mês</p>
                <p>Valor médio de venda: R$ 2.000.000</p>
                <p>Quantidade de imóveis para alugar: 120</p>
                <p>Quantidade de imóveis para vender: 85</p>
              </div>
              <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4">
                <h3 className="text-red-600 font-semibold mb-2">
                  Avaliação do bairro
                </h3>
                <p>Geral: 4,5/5</p>
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half-star" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="#D1D5DB" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#half-star)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <div className="bg-[#F1F1F1] border border-[#AFAFAF] rounded-lg p-4">
                <h3 className="text-red-600 font-semibold mb-2">
                  Dados de deslocamento
                </h3>
                <p>Pontuação de transporte público: 8/10</p>
                <p>Pontuação de facilidade de caminhada: 7/10</p>
                <p>Pontuação de ciclovias: 8/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection